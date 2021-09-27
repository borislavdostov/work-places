import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserWorkplace } from '../shared/interfaces/user-workplace';
import { environment } from 'src/environments/environment';
import { IUserWorkplaceOptions } from '../shared/interfaces/user-workplace-options';
import { IUserWorkplaceAddEdit } from '../shared/interfaces/user-workplace-add-edit';
import { requestHeaders } from '../shared/constants';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserWorkplaceService {

  constructor(private http: HttpClient) { }

  getUserWorkplaces(): Observable<IUserWorkplace[]> {
    return this.http.get<IUserWorkplace[]>(`${apiUrl}/userworkplaces`);
  }

  getUserWorkplaceOptions(): Observable<IUserWorkplaceOptions> {
    return this.http.get<IUserWorkplaceOptions>(`${apiUrl}/userworkplaces/options`);
  }

  getUserWorkplace(id: number): Observable<IUserWorkplaceAddEdit> {
    return this.http.get<IUserWorkplaceAddEdit>(`${apiUrl}/userworkplaces/${id}`);
  }

  createUserWorkplace(userWorkplace: IUserWorkplaceAddEdit) {
    return this.http.post(`${apiUrl}/userworkplaces`, JSON.stringify(userWorkplace), { headers: requestHeaders });
  }

  editUserWorkplace(id: number, userWorkplace: IUserWorkplaceAddEdit) {
    return this.http.put(`${apiUrl}/userworkplaces/${id}`, JSON.stringify(userWorkplace), { headers: requestHeaders });
  }

  deleteUserWorkplace(id: number) {
    return this.http.delete(`${apiUrl}/userworkplaces/${id}`);
  }
}
