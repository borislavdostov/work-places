import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWorkplaceListComponent } from './user-workplace-list/user-workplace-list.component';
import { AddEditUserWorkplaceDialogComponent } from './add-edit-user-workplace-dialog/add-edit-user-workplace-dialog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserWorkplaceListComponent,
    AddEditUserWorkplaceDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserWorkplaceModule { }
