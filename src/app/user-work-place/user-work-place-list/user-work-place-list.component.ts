import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { snackBarDuration } from 'src/app/shared/constants';
import { IUserWorkplace } from 'src/app/shared/interfaces/user-workplace';
import { AddEditUserWorkPlaceDialogComponent } from '../add-edit-user-workplace-dialog/add-edit-user-workplace-dialog.component';
import { UserWorkplaceService } from '../user-workplace.service';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './user-work-place-list.component.html',
  styleUrls: ['./user-work-place-list.component.css']
})
export class UserWorkPlaceListComponent implements OnInit, AfterViewInit {

  userWorkplaces!: IUserWorkplace[];
  dataSource = new MatTableDataSource();
  isLoading = false;
  disabled = false;

  workplacesTitle: string = '';
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
    let dialogRef = this.addEditWorkplaceDialog.open(AddEditUserWorkPlaceDialogComponent, {
      data: {
        isCreate: true
      }
    });

    dialogRef.afterClosed().subscribe(
      dialogResult => {
        if (dialogResult?.confirmed) {
          this.getUserWorkplaces();
        }
      });
  }

  openEditUserWorkplaceDialog(userWorkplaceId: number) {
    this.disabled = true;
    this.userWorkplaceService.getUserWorkplace(userWorkplaceId).subscribe(
      userWorkplace => {
        let dialogRef = this.addEditWorkplaceDialog.open(AddEditUserWorkPlaceDialogComponent, {
          data: {
            title: `Edit Workplace`,
            userWorkplaceId: userWorkplaceId,
            userWorkplace: userWorkplace
          }
        });

        dialogRef.afterClosed().subscribe(
          dialogResult => {
            this.disabled = false;
            if (dialogResult?.confirmed) {
              this.getUserWorkplaces();
            }
          });
      },
      () => {
        this.disabled = false;
        let snackBarRef = this.snackBar.open("Error editing workplace!", "RETRY", { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.openEditUserWorkplaceDialog(userWorkplaceId));
      });
  }

  openDeleteUserWorkplaceDialog(workplace: IUserWorkplace) {
    let dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete workplace ${workplace.workplace} for user ${workplace.user}?`
      }
    });

    dialogRef.afterClosed().subscribe(
      confirmed => {
        if (confirmed) {
          this.deleteUserWorkplace(workplace.id);
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
