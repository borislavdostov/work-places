import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserWorkPlace } from '../shared/interfaces/user-work-place';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WorkPlaceService {

  constructor(private http: HttpClient) { }

  getWorkPlaces(): Observable<IUserWorkPlace[]>{
    return this.http.get<IUserWorkPlace[]>(`${apiUrl}/userworkplaces`);
  }
}
