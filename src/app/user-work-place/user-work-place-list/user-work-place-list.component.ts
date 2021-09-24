import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { snackBarDuration } from 'src/app/shared/constants';
import { IUserWorkPlace } from 'src/app/shared/interfaces/user-work-place';
import { AddEditUserWorkPlaceDialogComponent } from '../add-edit-user-work-place-dialog/add-edit-user-work-place-dialog.component';
import { UserWorkPlaceService } from '../user-work-place.service';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './user-work-place-list.component.html',
  styleUrls: ['./user-work-place-list.component.css']
})
export class UserWorkPlaceListComponent implements OnInit, AfterViewInit {

  userWorkplaces!: IUserWorkPlace[];
  dataSource = new MatTableDataSource();
  isLoading = false;
  disabled = false;

  workplacesTitle: string = '';
  displayedColumns: string[] = ['user', 'workplace', 'fromDate', 'toDate', 'options'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userWorkPlaceService: UserWorkPlaceService,
    private snackBar: MatSnackBar,
    private confirmationDialog: MatDialog,
    private addEditWorkPlaceDialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserWorkPlaces();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUserWorkPlaces() {
    this.isLoading = true;
    this.userWorkPlaceService.getUserWorkplaces().subscribe(
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

  openNewUserWorkPlaceDialog() {
    let dialogRef = this.addEditWorkPlaceDialog.open(AddEditUserWorkPlaceDialogComponent, {
      data: {
        isCreate: true
      }
    });

    dialogRef.afterClosed().subscribe(
      dialogResult => {
        if (dialogResult?.confirmed) {
          this.getUserWorkPlaces();
        }
      });
  }

  openEditUserWorkPlaceDialog(userWorkplaceId: number) {
    this.disabled = true;
    this.userWorkPlaceService.getUserWorkplace(userWorkplaceId).subscribe(
      userWorkplace => {
        let dialogRef = this.addEditWorkPlaceDialog.open(AddEditUserWorkPlaceDialogComponent, {
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
              this.getUserWorkPlaces();
            }
          });
      },
      () => {
        this.disabled = false;
        let snackBarRef = this.snackBar.open("Error editing workplace!", "RETRY", { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.openEditUserWorkPlaceDialog(userWorkPlaceId));
      });
  }

  openDeleteUserWorkPlaceDialog(workplace: IUserWorkPlace) {
    let dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete workplace ${workplace.workplace} for user ${workplace.user}?`
      }
    });

    dialogRef.afterClosed().subscribe(
      confirmed => {
        if (confirmed) {
          this.deleteUserWorkPlace(workplace.id);
        }
      });
  }

  deleteUserWorkPlace(id: number) {
    this.userWorkPlaceService.deleteUserWorkplace(id).subscribe(
      () => {
        this.getUserWorkPlaces();
      },
      () => {
        let snackBarRef = this.snackBar.open("Error deleting workplace!", "RETRY", { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.deleteUserWorkPlace(id));
      });
  }

}
