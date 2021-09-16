import { Component, OnInit } from '@angular/core';
import { IUserWorkPlace } from 'src/app/shared/interfaces/user-work-place';

@Component({
  selector: 'app-work-place-list',
  templateUrl: './work-place-list.component.html',
  styleUrls: ['./work-place-list.component.css']
})
export class WorkPlaceListComponent implements OnInit {

  displayedColumns: string[] = ['user', 'workPlace', 'fromDate', 'toDate', 'options'];

  dataSource: IUserWorkPlace[] = [
    { id: 1, user: 'Ivan Ivanov', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 2, user: 'Petar Petrov', workPlace: 'React', fromDate: '', todate: '' },
    { id: 3, user: 'Georgi Georgiev', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 4, user: 'Iliyan Iliev', workPlace: 'JavaScript', fromDate: '', todate: '' },
    { id: 5, user: 'Borislav Borisov', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 6, user: 'Dimitar Dimitrov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 1, user: 'Ivan Ivanov', workPlace: 'React', fromDate: '', todate: '' },
    { id: 2, user: 'Petar Petrov', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 3, user: 'Georgi Georgiev', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 4, user: 'Iliyan Iliev', workPlace: 'JavaScript', fromDate: '', todate: '' },
    { id: 5, user: 'Borislav Borisov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 6, user: 'Dimitar Dimitrov', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 1, user: 'Ivan Ivanov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 2, user: 'Petar Petrov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 3, user: 'Georgi Georgiev', workPlace: 'JavaScript', fromDate: '', todate: '' },
    { id: 4, user: 'Iliyan Iliev', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 5, user: 'Borislav Borisov', workPlace: 'React', fromDate: '', todate: '' },
    { id: 6, user: 'Dimitar Dimitrov', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 1, user: 'Ivan Ivanov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 2, user: 'Petar Petrov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 3, user: 'Georgi Georgiev', workPlace: 'JavaScript', fromDate: '', todate: '' },
    { id: 4, user: 'Iliyan Iliev', workPlace: 'ASP .NET Core', fromDate: '', todate: '' },
    { id: 5, user: 'Borislav Borisov', workPlace: 'Angular', fromDate: '', todate: '' },
    { id: 6, user: 'Dimitar Dimitrov', workPlace: 'React', fromDate: '', todate: '' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
