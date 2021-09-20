import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserWorkPlaceListComponent } from './user-work-place/user-work-place-list/user-work-place-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workplaces'
  },
  {
    path: 'workplaces',
    component: UserWorkPlaceListComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
