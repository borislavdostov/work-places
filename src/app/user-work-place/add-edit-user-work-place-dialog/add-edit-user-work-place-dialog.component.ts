import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
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
  userOptions: IUserDropdown[] = [];
  workPlaceOptions: IWorkPlace[] = [];
  submitButtonTitle: string;
  submitButtonColor: string;
  userWorkPlaceId: number;
  userWorkPlace: IUserWorkPlaceAddEdit;

  errors!: string[]

  disabled = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AddEditUserWorkPlaceDialogComponent>,
    private userWorkPlaceService: UserWorkPlaceService) {
    this.title = data.title || 'Create Work Place';
    this.submitButtonTitle = data.isCreate ? 'Create' : 'Save';
    this.submitButtonColor = data.isCreate ? 'accent' : 'primary';

    userWorkPlaceService.getUserWorkPlaceOptions().subscribe(
      options => {
        this.userOptions = options.users;
        this.workPlaceOptions = options.workplaces;
      },
      (error: HttpErrorResponse) => {
        if (error.status == 0) {
          this.errors = ["Unable to get users and work places."];
        } else {
          this.errors = error.error;
        }
      });

    this.userWorkPlaceId = data.userWorkPlaceId;
    this.userWorkPlace = data.userWorkPlace
  }

  onSubmit(userWorkPlace: IUserWorkPlaceAddEdit) {
    this.disabled = true;
    if (this.data.isCreate) {
      this.userWorkPlaceService.createUserWorkPlace(userWorkPlace).subscribe(
        () => {
          this.dialogRef.close({ confirmed: true });
        },
        (error: HttpErrorResponse) => {
          if (error.status == 0) {
            this.errors = ["Unable to create work place."];
          } else {
            this.errors = error.error;
          }
          this.disabled = false;
        });
    } else {
      this.userWorkPlaceService.editUserWorkPlace(this.userWorkPlaceId, userWorkPlace).subscribe(
        () => {
          this.dialogRef.close({ confirmed: true });
        },
        (error: HttpErrorResponse) => {
          if (error.status == 0) {
            this.errors = ["Unable to edit work place."];
          } else {
            this.errors = error.error;
          }
          this.disabled = false;
        });
    }
  }

}
