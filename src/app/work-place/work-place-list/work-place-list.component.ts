import { Component, OnInit } from '@angular/core';
import { IUserWorkPlace } from 'src/app/shared/interfaces/user-work-place';
import { WorkPlaceService } from '../work-place.service';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './work-place-list.component.html',
  styleUrls: ['./work-place-list.component.css']
})
export class WorkPlaceListComponent implements OnInit {

  workPlaces!: IUserWorkPlace[];
  displayedColumns: string[] = ['user', 'workPlace', 'fromDate', 'toDate', 'options'];

  constructor(private workPlaceService: WorkPlaceService) { }

  ngOnInit(): void {
    this.workPlaceService.getWorkPlaces().subscribe(workPlaces => this.workPlaces = workPlaces);
  }

}
