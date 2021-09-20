import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { WorkPlaceListComponent } from './work-place-list/work-place-list.component';
import { AddEditWorkPlaceDialogComponent } from './add-edit-work-place-dialog/add-edit-work-place-dialog.component';

@NgModule({
  declarations: [
    WorkPlaceListComponent,
    AddEditWorkPlaceDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class WorkPlaceModule { }
