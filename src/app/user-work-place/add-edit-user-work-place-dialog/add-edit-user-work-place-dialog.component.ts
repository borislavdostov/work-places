import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserDropdown } from 'src/app/shared/interfaces/user-dropdown';
import { IWorkPlace } from 'src/app/shared/interfaces/work-place';

@Component({
  selector: 'app-add-edit-work-place-dialog',
  templateUrl: './add-edit-user-work-place-dialog.component.html',
  styleUrls: ['./add-edit-user-work-place-dialog.component.css']
})
export class AddEditUserWorkPlaceDialogComponent {

  title: string;
  submitButtonTitle: string;
  submitButtonColor: string;
  userOptions: IUserDropdown[] = [];
  workPlaceOptions: IWorkPlace[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEditUserWorkPlaceDialogComponent>) {
    this.title = data.title || 'Create Work Place';
    this.submitButtonTitle = data.isCreate ? 'Create' : 'Save';
    this.submitButtonColor = data.isCreate ? 'accent' : 'primary';
    if (data.options) {
      this.userOptions = data.options.users;
      this.workPlaceOptions = data.options.workPlaces;
    }
  }

  onSubmitClick() {
    this.dialogRef.close(true);
  }
}
