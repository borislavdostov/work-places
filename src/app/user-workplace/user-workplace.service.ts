import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserWorkplace } from '../shared/interfaces/user-workplace';
import { environment } from 'src/environments/environment';
import { IUserWorkplaceOptions } from '../shared/interfaces/user-workplace-options';
import { IUserWorkplaceAddEdit } from '../shared/interfaces/user-workplace-add-edit';
import { requestHeaders } from '../shared/constants';

const userWorkplacesApiUrl = `${environment.apiUrl}/userworkplaces`;

@Injectable({
  providedIn: 'root'
})
export class UserWorkplaceService {

  constructor(private http: HttpClient) { }

  getUserWorkplaces(): Observable<IUserWorkplace[]> {
    return this.http.get<IUserWorkplace[]>(`${userWorkplacesApiUrl}/userworkplaces`);
  }

  getUserWorkplaceOptions(): Observable<IUserWorkplaceOptions> {
    return this.http.get<IUserWorkplaceOptions>(`${userWorkplacesApiUrl}/userworkplaces/options`);
  }

  getUserWorkplace(id: number): Observable<IUserWorkplaceAddEdit> {
    return this.http.get<IUserWorkplaceAddEdit>(`${userWorkplacesApiUrl}/userworkplaces/${id}`);
  }

  createUserWorkplace(userWorkplace: IUserWorkplaceAddEdit) {
    return this.http.post(`${userWorkplacesApiUrl}/userworkplaces`, JSON.stringify(userWorkplace), requestHeaders);
  }

  editUserWorkplace(id: number, userWorkplace: IUserWorkplaceAddEdit) {
    return this.http.put(`${userWorkplacesApiUrl}/userworkplaces/${id}`, JSON.stringify(userWorkplace), requestHeaders);
  }

  deleteUserWorkplace(id: number) {
    return this.http.delete(`${userWorkplacesApiUrl}/userworkplaces/${id}`);
  }
}
