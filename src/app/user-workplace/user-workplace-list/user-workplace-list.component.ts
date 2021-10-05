import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { snackBarDuration } from 'src/app/shared/constants';
import { IUserWorkplace } from 'src/app/shared/interfaces/user-workplace';
import { AddEditUserWorkplaceDialogComponent } from '../add-edit-user-workplace-dialog/add-edit-user-workplace-dialog.component';
import { UserWorkplaceService } from '../user-workplace.service';

@Component({
  selector: 'app-workplace-list',
  templateUrl: './user-workplace-list.component.html',
  styleUrls: ['./user-workplace-list.component.css']
})
export class UserWorkplaceListComponent implements OnInit, AfterViewInit {

  userWorkplaces!: IUserWorkplace[];
  dataSource = new MatTableDataSource();
  isLoading = false;
  disabled = false;

  workplacesTitle!: string;
  displayedColumns: string[] = ['user', 'workplace', 'fromDate', 'toDate', 'options'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userWorkplaceService: UserWorkplaceService,
    private snackBar: MatSnackBar,
    private confirmationDialog: MatDialog,
    private addEditWorkplaceDialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserWorkplaces();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUserWorkplaces() {
    this.isLoading = true;
    this.userWorkplaceService.getUserWorkplaces().subscribe(
      workplaces => {
        this.userWorkplaces = workplaces;
        this.dataSource.data = this.userWorkplaces;
        this.workplacesTitle = `${this.userWorkplaces.length} Workplaces`;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      });
  }

  openNewUserWorkplaceDialog() {
    let dialogRef = this.addEditWorkplaceDialog.open(AddEditUserWorkplaceDialogComponent, {
      data: {
        isCreate: true
      }
    });

    dialogRef.afterClosed().subscribe(
      confirmed => {
        if (confirmed) {
          this.getUserWorkplaces();
        }
      });
  }

  openEditUserWorkplaceDialog(userWorkplaceToEdit: IUserWorkplace) {
    this.disabled = true;
    this.userWorkplaceService.getUserWorkplace(userWorkplaceToEdit.id).subscribe(
      userWorkplace => {
        let dialogRef = this.addEditWorkplaceDialog.open(AddEditUserWorkplaceDialogComponent, {
          data: {
            title: `Edit Workplace ${userWorkplaceToEdit.workplace} for user ${userWorkplaceToEdit.user}`,
            userWorkplaceId: userWorkplaceToEdit.id,
            userWorkplace: userWorkplace
          }
        });

        dialogRef.afterClosed().subscribe(
          confirmed => {
            this.disabled = false;
            if (confirmed) {
              this.getUserWorkplaces();
            }
          });
      },
      () => {
        this.disabled = false;
        let snackBarRef = this.snackBar.open("Error editing workplace!", "RETRY", { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.openEditUserWorkplaceDialog(userWorkplaceToEdit));
      });
  }

  openDeleteUserWorkplaceDialog(userWorkplace: IUserWorkplace) {
    let dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete workplace ${userWorkplace.workplace} for user ${userWorkplace.user}?`
      }
    });

    dialogRef.afterClosed().subscribe(
      confirmed => {
        if (confirmed) {
          this.deleteUserWorkplace(userWorkplace.id);
        }
      });
  }

  deleteUserWorkplace(id: number) {
    this.userWorkplaceService.deleteUserWorkplace(id).subscribe(
      () => {
        this.getUserWorkplaces();
      },
      () => {
        let snackBarRef = this.snackBar.open("Error deleting workplace!", "RETRY", { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.deleteUserWorkplace(id));
      });
  }

}
