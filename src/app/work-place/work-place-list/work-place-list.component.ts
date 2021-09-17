import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserWorkPlace } from 'src/app/shared/interfaces/user-work-place';
import { WorkPlaceService } from '../work-place.service';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './work-place-list.component.html',
  styleUrls: ['./work-place-list.component.css']
})
export class WorkPlaceListComponent implements OnInit {

  workPlaces!: IUserWorkPlace[];
  count: number = 0;
  displayedColumns: string[] = ['user', 'workPlace', 'fromDate', 'toDate', 'options'];

  constructor(private workPlaceService: WorkPlaceService, private router: Router) { }

  ngOnInit(): void {
    this.getWorkPlaces();
  }

  getWorkPlaces() {
    this.workPlaceService.getWorkPlaces().subscribe(workPlaces => {
      this.workPlaces = workPlaces;
      this.count = this.workPlaces.length;
    });
  }

  onEditClick(id: number) {
    alert(id);
  }

  onDeleteClick(id: number) {
    // this.isLoading = true;
    // this.errorMessage = '';
    this.workPlaceService.deleteWorkPlace(id).subscribe({
      next: (data) => {
        // this.isLoading = false;
        // this.router.navigate(['/']);
        this.getWorkPlaces();
      },
      error: (err) => {
        // this.errorMessage = 'ERROR!';
        // this.isLoading = false;
      }
    });
  }

}
