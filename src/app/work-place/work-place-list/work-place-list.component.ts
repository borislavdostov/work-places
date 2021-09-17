import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWorkPlaces();
  }

  getWorkPlaces() {
    this.workPlaceService.getWorkPlaces().subscribe(workPlaces => {
      this.workPlaces = workPlaces;
      this.workPlacesTitle = `${this.workPlaces.length} Work Places`;
    });
  }

  onEditClick(id: number) {
    alert(id);
  }

  onDeleteClick(id: number) {
    this.workPlaceService.deleteWorkPlace(id).subscribe({
      next: (data) => {
        this.getWorkPlaces();
      },
      error: (err) => {
        let snackBarRef = this.snackBar.open("Error deleting work place!", "RETRY");
        snackBarRef.onAction().subscribe(() => this.onDeleteClick(id));
      }
    });
  }

  onNewClicked(){
    console.log("Work Place");
  }

}
