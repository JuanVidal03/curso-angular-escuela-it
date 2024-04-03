import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { ListComponent } from '@users/components/list/list.component';
import { UsersComponent } from '@users/components/users/users.component';

const routes: Routes = [
  { path:'list-users', component: ListComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }