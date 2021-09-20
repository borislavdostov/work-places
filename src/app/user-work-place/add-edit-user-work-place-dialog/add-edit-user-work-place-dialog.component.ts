import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserDropdown } from 'src/app/shared/interfaces/user-dropdown';
import { IUserWorkPlaceAddEdit } from 'src/app/shared/interfaces/user-work-place-add-edit';
import { IWorkPlace } from 'src/app/shared/interfaces/work-place';
import { UserWorkPlaceService } from '../user-work-place.service';

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
    private dialogRef: MatDialogRef<AddEditUserWorkPlaceDialogComponent>,
    userWorkPlaceService: UserWorkPlaceService) {
    this.title = data.title || 'Create Work Place';
    this.submitButtonTitle = data.isCreate ? 'Create' : 'Save';
    this.submitButtonColor = data.isCreate ? 'accent' : 'primary';

    userWorkPlaceService.getUserWorkPlaceOptions().subscribe(options => {
      this.userOptions = options.users;
      this.workPlaceOptions = options.workPlaces;
    });
  }

  onSubmit(userWorkPlace: IUserWorkPlaceAddEdit) {
    this.dialogRef.close({ confirmed: true, userWorkPlace: userWorkPlace });
  }
}
