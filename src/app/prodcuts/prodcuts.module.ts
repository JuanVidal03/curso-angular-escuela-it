import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdcutsRoutingModule } from './prodcuts-routing.module';

//componentes
import { ProductComponent } from './components/product/product.component';
import { ProdcutListComponent } from './components/prodcut-list/prodcut-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// servicios
import { ProductDetailService } from './services/product-detail.service';


@NgModule({
  declarations: [
    ProdcutListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProdcutsRoutingModule,
    FormsModule
  ],
  providers:[
    ProductDetailService
  ]
})

export class ProdcutsModule { }