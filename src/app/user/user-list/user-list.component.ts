import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
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
  count: number = 0;
  displayedColumns: string[] = ['name', 'email', 'options'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.count = this.users.length;
    });
  }

  onEditClick(id: number) {
    alert(id);
  }

  onDeleteClick(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        this.getUsers();
      },
      error: (err) => {

      }
    });
  }

}
