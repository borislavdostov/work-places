import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: IUser[];
  displayedColumns: string[] = ['name', 'email', 'options'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onEditClick(id: number){
    alert(id);
  }

  onDeleteClick(id: number){
    alert(id);
  }

}
