import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { requestHeaders } from '../shared/constants';
import { IUser } from '../shared/interfaces/user';
import { IUserAddEdit } from '../shared/interfaces/user-add-edit';

const usersApiUrl = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(usersApiUrl);
  }

  getUser(id: number): Observable<IUserAddEdit> {
    return this.http.get<IUserAddEdit>(`${usersApiUrl}/${id}`);
  }

  createUser(user: IUserAddEdit) {
    return this.http.post(usersApiUrl, JSON.stringify(user), { headers: requestHeaders });
  }

  editUser(id: number, user: IUserAddEdit) {
    return this.http.put(`${usersApiUrl}/${id}`, JSON.stringify(user), { headers: requestHeaders });
  }

  deleteUser(id: number) {
    return this.http.delete(`${usersApiUrl}/${id}`);
  }
}
