import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { IUserWorkPlace } from 'src/app/shared/interfaces/user-work-place';
import { WorkPlaceService } from '../work-place.service';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './work-place-list.component.html',
  styleUrls: ['./work-place-list.component.css']
})
export class WorkPlaceListComponent implements OnInit {

  workPlaces!: IUserWorkPlace[];
  workPlacesTitle: string = '';
  displayedColumns: string[] = ['user', 'workPlace', 'fromDate', 'toDate', 'options'];

  constructor(
    private workPlaceService: WorkPlaceService,
    private snackBar: MatSnackBar,
    private confirmationDialog: MatDialog) { }

  ngOnInit(): void {
    this.getWorkPlaces();
  }

  getWorkPlaces() {
    this.workPlaceService.getWorkPlaces().subscribe(workPlaces => {
      this.workPlaces = workPlaces;
      this.workPlacesTitle = `${this.workPlaces.length} Work Places`;
    });
  }

  onNewClicked() {
    alert("Work Place");
  }

  onEditClick(id: number) {
    alert(id);
  }

  openDialog(workPlace: IUserWorkPlace) {
    let dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete work place ${workPlace.workPlace} ?`
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteWorkPlace(workPlace.id);
      }
    })
  }

  deleteWorkPlace(id: number) {
    this.workPlaceService.deleteWorkPlace(id).subscribe({
      next: (data) => {
        this.getWorkPlaces();
      },
      error: (err) => {
        let snackBarRef = this.snackBar.open("Error deleting work place!", "RETRY");
        snackBarRef.onAction().subscribe(() => this.deleteWorkPlace(id));
      }
    });
  }

}
