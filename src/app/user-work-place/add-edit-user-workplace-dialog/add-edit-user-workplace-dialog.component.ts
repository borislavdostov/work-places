import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserDropdown } from 'src/app/shared/interfaces/user-dropdown';
import { IUserWorkplaceAddEdit } from 'src/app/shared/interfaces/user-workplace-add-edit';
import { IWorkplace } from 'src/app/shared/interfaces/workplace';
import { UserWorkplaceService } from '../user-workplace.service';

@Component({
  selector: 'app-add-edit-work-place-dialog',
  templateUrl: './add-edit-user-workplace-dialog.component.html',
  styleUrls: ['./add-edit-user-workplace-dialog.component.css']
})
export class AddEditUserWorkPlaceDialogComponent {

  title: string;
  userOptions: IUserDropdown[] = [];
  workplaceOptions: IWorkplace[] = [];
  submitButtonTitle: string;
  submitButtonColor: string;
  userWorkplaceId: number;
  userWorkplace: IUserWorkplaceAddEdit;

  errors!: string[]

  disabled = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AddEditUserWorkPlaceDialogComponent>,
    private userWorkplaceService: UserWorkplaceService) {
    this.title = data.title || 'Create Workplace';
    this.submitButtonTitle = data.isCreate ? 'Create' : 'Save';
    this.submitButtonColor = data.isCreate ? 'accent' : 'primary';

    userWorkplaceService.getUserWorkplaceOptions().subscribe(
      options => {
        this.userOptions = options.users;
        this.workplaceOptions = options.workplaces;
      },
      (error: HttpErrorResponse) => {
        if (error.status == 0) {
          this.errors = ["Unable to get users and workplaces."];
        } else {
          this.errors = error.error;
        }
      });

    this.userWorkplaceId = data.userWorkplaceId;
    this.userWorkplace = data.userWorkplace
  }

  onSubmit(userWorkplace: IUserWorkplaceAddEdit) {
    this.disabled = true;
    if (this.data.isCreate) {
      this.userWorkplaceService.createUserWorkplace(userWorkplace).subscribe(
        () => {
          this.dialogRef.close({ confirmed: true });
        },
        (error: HttpErrorResponse) => {
          if (error.status == 0) {
            this.errors = ["Unable to create workplace."];
          } else {
            this.errors = error.error;
          }
          this.disabled = false;
        });
    } else {
      this.userWorkplaceService.editUserWorkplace(this.userWorkplaceId, userWorkplace).subscribe(
        () => {
          this.dialogRef.close({ confirmed: true });
        },
        (error: HttpErrorResponse) => {
          if (error.status == 0) {
            this.errors = ["Unable to edit workplace."];
          } else {
            this.errors = error.error;
          }
          this.disabled = false;
        });
    }
  }

}
