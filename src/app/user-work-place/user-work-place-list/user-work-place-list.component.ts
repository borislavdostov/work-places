import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { IUserWorkPlace } from 'src/app/shared/interfaces/user-work-place';
import { AddEditUserWorkPlaceDialogComponent } from '../add-edit-user-work-place-dialog/add-edit-user-work-place-dialog.component';
import { UserWorkPlaceService } from '../user-work-place.service';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './user-work-place-list.component.html',
  styleUrls: ['./user-work-place-list.component.css']
})
export class UserWorkPlaceListComponent implements OnInit, AfterViewInit {

  userWorkPlaces!: IUserWorkPlace[];
  dataSource = new MatTableDataSource();
  isLoading = false;

  workPlacesTitle: string = '';
  displayedColumns: string[] = ['user', 'workPlace', 'fromDate', 'toDate', 'options'];

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
    this.userWorkPlaceService.getUserWorkPlaces().subscribe(
      workPlaces => {
        this.userWorkPlaces = workPlaces;
        this.dataSource.data = this.userWorkPlaces;
        this.workPlacesTitle = `${this.userWorkPlaces.length} Work Places`;
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

  openEditUserWorkPlaceDialog(userWorkPlaceId: number) {
    this.userWorkPlaceService.getUserWorkPlace(userWorkPlaceId).subscribe(
      userWorkPlace => {
        let dialogRef = this.addEditWorkPlaceDialog.open(AddEditUserWorkPlaceDialogComponent, {
          data: {
            title: `Edit Work Place`,
            userWorkPlaceId: userWorkPlaceId,
            userWorkPlace: userWorkPlace
          }
        });

        dialogRef.afterClosed().subscribe(
          dialogResult => {
            if (dialogResult?.confirmed) {
              this.getUserWorkPlaces();
            }
          });
      },
      () => {
        let snackBarRef = this.snackBar.open("Error deleting work place!", "RETRY");
        snackBarRef.onAction().subscribe(() => this.openEditUserWorkPlaceDialog(userWorkPlaceId));
      });
  }

  openDeleteUserWorkPlaceDialog(workPlace: IUserWorkPlace) {
    let dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete work place ${workPlace.workPlace} for user ${workPlace.user}?`
      }
    });

    dialogRef.afterClosed().subscribe(
      confirmed => {
        if (confirmed) {
          this.deleteUserWorkPlace(workPlace.id);
        }
      });
  }

  deleteUserWorkPlace(id: number) {
    this.userWorkPlaceService.deleteUserWorkPlace(id).subscribe(
      () => {
        this.getUserWorkPlaces();
      },
      () => {
        let snackBarRef = this.snackBar.open("Error editing work place!", "RETRY");
        snackBarRef.onAction().subscribe(() => this.deleteUserWorkPlace(id));
      });
  }
}
