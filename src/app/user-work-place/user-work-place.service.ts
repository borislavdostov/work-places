import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserWorkPlace } from '../shared/interfaces/user-work-place';
import { environment } from 'src/environments/environment';
import { IUserWorkPlaceOptions } from '../shared/interfaces/user-work-place-options';
import { IUserWorkPlaceAddEdit } from '../shared/interfaces/user-work-place-add-edit';
import { requestHeaders } from '../shared/constants';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserWorkPlaceService {

  constructor(private http: HttpClient) { }

  getUserWorkplaces(): Observable<IUserWorkPlace[]> {
    return this.http.get<IUserWorkPlace[]>(`${apiUrl}/userworkplaces`);
  }

  getUserWorkplaceOptions(): Observable<IUserWorkPlaceOptions> {
    return this.http.get<IUserWorkPlaceOptions>(`${apiUrl}/userworkplaces/options`);
  }

  getUserWorkplace(id: number): Observable<IUserWorkPlaceAddEdit> {
    return this.http.get<IUserWorkPlaceAddEdit>(`${apiUrl}/userworkplaces/${id}`);
  }

  createUserWorkplace(userWorkPlace: IUserWorkPlaceAddEdit) {
    return this.http.post(`${apiUrl}/userworkplaces`, JSON.stringify(userWorkPlace), { headers: requestHeaders });
  }

  editUserWorkplace(id: number, userWorkPlace: IUserWorkPlaceAddEdit) {
    return this.http.put(`${apiUrl}/userworkplaces/${id}`, JSON.stringify(userWorkPlace), { headers: requestHeaders });
  }

  deleteUserWorkplace(id: number) {
    return this.http.delete(`${apiUrl}/userworkplaces/${id}`);
  }
}
