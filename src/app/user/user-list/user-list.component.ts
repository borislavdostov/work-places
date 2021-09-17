import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { snackBarDuration } from 'src/app/shared/constants';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: IUser[];
  usersTitle: string = '';
  displayedColumns: string[] = ['name', 'email', 'options'];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private confirmationDialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.usersTitle = `${this.users.length} Users`;
    });
  }

  onNewClicked() {
    alert("User");
  }

  onEditClick(id: number) {

  }

  openDeleteDialog(user: IUser) {
    const dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete user ${user.name}?`
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteUser(user.id);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        this.getUsers();
      },
      error: (err) => {
        let snackBarRef = this.snackBar.open('Error deleting user!', 'RETRY', { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.deleteUser(id));
      }
    });
  }

}
