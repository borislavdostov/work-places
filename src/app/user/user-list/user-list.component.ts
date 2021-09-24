import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { snackBarDuration } from 'src/app/shared/constants';
import { IUser } from 'src/app/shared/interfaces/user';
import { AddEditUserDialogComponent } from '../add-edit-user-dialog/add-edit-user-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users!: IUser[];
  dataSource = new MatTableDataSource();
  isLoading = false;

  usersTitle!: string;
  displayedColumns: string[] = ['name', 'age', 'email', 'options'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private confirmationDialog: MatDialog,
    private addEditUserDialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.dataSource.data = this.users;
        this.usersTitle = `${this.users.length} Users`;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      });
  }

  openNewUserDialog() {
    let dialogRef = this.addEditUserDialog.open(AddEditUserDialogComponent, {
      data: {
        isCreate: true
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult?.confirmed) {
        this.getUsers();
      }
    });
  }

  openEditUserDialog(userId: number) {
    this.userService.getUser(userId).subscribe(
      user => {
        let dialogRef = this.addEditUserDialog.open(AddEditUserDialogComponent, {
          data: {
            title: `Edit User ${user.firstName} ${user.lastName}`,
            userId: userId,
            user: user
          }
        });

        dialogRef.beforeClosed().subscribe(dialogResult => {
          if (dialogResult?.confirmed) {
            this.getUsers();
          }
        });
      },
      () => {
        let snackBarRef = this.snackBar.open('Error editing user!', 'RETRY', { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.openEditUserDialog(userId));
      });
  }

  openDeleteUserDialog(user: IUser) {
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
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
      },
      () => {
        let snackBarRef = this.snackBar.open('Error deleting user!', 'RETRY', { duration: snackBarDuration });
        snackBarRef.onAction().subscribe(() => this.deleteUser(id));
      }
    );
  }
}
