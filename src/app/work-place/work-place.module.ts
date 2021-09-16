import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPlaceListComponent } from './work-place-list/work-place-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WorkPlaceListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WorkPlaceModule { }
