import { Component, OnInit } from '@angular/core';
// modelo del producto
import { Product } from '@products/models/product.model';
// para la navegacion
import { Router } from '@angular/router';
// servicio de productos
import { ProductDetailService } from '@products/services/product-detail.service';


@Component({
  selector: 'app-prodcut-list',
  templateUrl: './prodcut-list.component.html',
  styleUrls: ['./prodcut-list.component.scss']
})
export class ProdcutListComponent implements OnInit {

  constructor(
    private productService:ProductDetailService,
    private router:Router
  ){}
  // productos que se van a renderizar
  productos:Product[] = [];

  ngOnInit(): void {
    this.productos = this.productService.getAllProducts();
  }

  // producto que viene del hijo
  onClickedProduct(id:number){
    this.router.navigate(['/products', id]);
  }
}
