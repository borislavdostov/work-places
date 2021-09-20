import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { snackBarDuration } from 'src/app/shared/constants';
import { IUser } from 'src/app/shared/interfaces/user';
import { IUserAddEdit } from 'src/app/shared/interfaces/user-add-edit';
import { AddEditUserDialogComponent } from '../add-edit-user-dialog/add-edit-user-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: IUser[];
  usersTitle: string = '';
  displayedColumns: string[] = ['name', 'age', 'email', 'options'];

  errors = [];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private confirmationDialog: MatDialog,
    private addEditUserDialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.usersTitle = `${this.users.length} Users`;
    });
  }

  openNewDialog() {
    let dialofRef = this.addEditUserDialog.open(AddEditUserDialogComponent, {
      data: {
        isCreate: true
      }
    });

    dialofRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult?.confirmed) {
        this.createUser(dialogResult.user);
      }
    });
  }

  createUser(user: IUserAddEdit) {
    this.userService.createUser(user).subscribe({
      next: () => {
        this.getUsers();
      },
      error: (response) => {
        console.log(response.error.errors);
      }
    });
  }

  openEditDialog(userId: number) {
    this.userService.getUser(userId).subscribe(user => {
      let dialogRef = this.addEditUserDialog.open(AddEditUserDialogComponent, {
        data: {
          title: `Edit User ${user.firstName} ${user.lastName}`,
          user: user
        }
      });
  
      dialogRef.beforeClosed().subscribe(dialogResult => {
        if (dialogResult?.confirmed) {
          this.editUser(user);
        }
      });
    });
  }

  editUser(user: IUserAddEdit) {

  }

  openDeleteDialog(user: IUser) {
    const dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete user ${user.name}?`
      }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
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
