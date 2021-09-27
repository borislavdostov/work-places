import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserWorkPlaceListComponent } from './user-work-place-list/user-work-place-list.component';
import { AddEditUserWorkplaceDialogComponent } from './add-edit-user-workplace-dialog/add-edit-user-workplace-dialog.component';

@NgModule({
  declarations: [
    UserWorkPlaceListComponent,
    AddEditUserWorkplaceDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserWorkplaceModule { }
