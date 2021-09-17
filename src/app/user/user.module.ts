import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

import { SharedModule } from '../shared/shared.module';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
