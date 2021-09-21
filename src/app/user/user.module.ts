import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserListComponent } from './user-list/user-list.component';
import { AddEditUserDialogComponent } from './add-edit-user-dialog/add-edit-user-dialog.component';

@NgModule({
  declarations: [
    UserListComponent,
    AddEditUserDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
