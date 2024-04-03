import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { ProdcutListComponent } from '@products/components/prodcut-list/prodcut-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products', component: ProdcutListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdcutsRoutingModule { }
