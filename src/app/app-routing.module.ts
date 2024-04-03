import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// componente de 404
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./todo/todo.module').then(module => module.TodoModule)
  },
  {
    path: '',
    loadChildren: () => import('./prodcuts/prodcuts.module').then(module => module.ProdcutsModule)
  },
  {
    path: '',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
  },
  {
    path: '',
    loadChildren: () => import('./basic/basic.module').then(module => module.BasicModule)
  },
  {
    path: '**',
    component: Page404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
