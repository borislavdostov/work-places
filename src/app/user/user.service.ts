import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${apiUrl}/users`);
  }

  createUser(user: IUser) {
    return this.http.put(`${apiUrl}/users`, JSON.stringify(user));
  }

  deleteUser(id: number) {
    return this.http.delete(`${apiUrl}/users/${id}`);
  }
}
