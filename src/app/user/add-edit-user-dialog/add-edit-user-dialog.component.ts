import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserAddEdit } from 'src/app/shared/interfaces/user-add-edit';

@Component({
  selector: 'app-add-edit-user-dialog',
  templateUrl: './add-edit-user-dialog.component.html',
  styleUrls: ['./add-edit-user-dialog.component.css']
})
export class AddEditUserDialogComponent {

  title: string;
  firstName = '';
  lastName = '';
  dateOfBirth = '';
  email = '';

  submitButtonTitle: string;
  submitButtonColor: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEditUserDialogComponent>) {
    this.title = data.title || 'Create User';
    if (data.user) {
      this.firstName = data.user.firstName;
      this.lastName = data.user.lastName;
      this.dateOfBirth = data.user.dateOfBirth;
      this.email = data.user.email;
    }
    this.submitButtonTitle = data.isCreate ? 'Create' : 'Save';
    this.submitButtonColor = data.isCreate ? 'accent' : 'primary';
  }

  onSubmit(user: IUserAddEdit) {
    this.dialogRef.close({ confirmed: true, user: user });
  }
}
