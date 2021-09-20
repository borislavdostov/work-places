import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
import { IUserAddEdit } from '../shared/interfaces/user-add-edit';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${apiUrl}/users`);
  }

  getUser(id: number): Observable<IUserAddEdit> {
    return this.http.get<IUserAddEdit>(`${apiUrl}/users/${id}`);
  }

  createUser(user: IUserAddEdit) {
    return this.http.post(`${apiUrl}/users`, JSON.stringify(user), { headers: this.headers });
  }

  editUser(id: number, user: IUserAddEdit) {
    return this.http.put(`${apiUrl}/users/${id}`, JSON.stringify(user), { headers: this.headers })
  }

  deleteUser(id: number) {
    return this.http.delete(`${apiUrl}/users/${id}`);
  }
}
