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

  getUserWorkPlaces(): Observable<IUserWorkPlace[]> {
    return this.http.get<IUserWorkPlace[]>(`${apiUrl}/userworkplaces`);
  }

  createUserWorkPlace(userWorkPlace: IUserWorkPlaceAddEdit) {
    return this.http.post(`${apiUrl}/userworkplaces`, JSON.stringify(userWorkPlace), { headers: requestHeaders });
  }

  getUserWorkPlaceOptions(): Observable<IUserWorkPlaceOptions> {
    return this.http.get<IUserWorkPlaceOptions>(`${apiUrl}/userworkplaces/options`);
  }

  deleteUserWorkPlace(id: number) {
    return this.http.delete(`${apiUrl}/userworkplaces/${id}`);
  }
}
