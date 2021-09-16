import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
