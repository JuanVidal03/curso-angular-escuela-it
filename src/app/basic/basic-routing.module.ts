import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { LayoutComponent } from '@basic/components/layout/layout.component';

const routes: Routes = [
  { path: 'basic', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
