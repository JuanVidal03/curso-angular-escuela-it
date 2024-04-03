import { Component, OnInit } from '@angular/core';
// para obtener el valor del parametro de la url
import { ActivatedRoute } from '@angular/router';
// obtener el servicio y en modelo
import { ProductDetailService } from '@products/services/product-detail.service';
import { Product } from '@products/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // producto a mostrar
  productDetail?:Product;

  // obteniendo el valor del parametro
  constructor(
    private params:ActivatedRoute,
    private productService:ProductDetailService
  ){}

  ngOnInit():void {
    // nos suscribimos porque la ruta puede estar constantemente cambiando
    this.params.params
    .subscribe(param => {
      const { id } = param;
      this.productDetail =  this.productService.getProductById(Number(id));
    })
  }

}
