import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPlaceListComponent } from './work-place-list/work-place-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditWorkPlaceDialogComponent } from './add-edit-work-place-dialog/add-edit-work-place-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    WorkPlaceListComponent,
    AddEditWorkPlaceDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule
  ]
})
export class WorkPlaceModule { }
