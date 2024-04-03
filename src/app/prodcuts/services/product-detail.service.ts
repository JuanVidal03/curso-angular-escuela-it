import { Injectable } from '@angular/core';
// importar modelo
import { Product } from '@products/models/product.model';

@Injectable()
export class ProductDetailService {

  constructor() { }

  // array de productos
  productos:Product[] = [
    {
      id:123,
      image: 'https://images.pexels.com/photos/20528016/pexels-photo-20528016/free-photo-of-amanecer-playa-mujer-caminando.jpeg',
      title: 'Producto 1',
      price: 8786,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id:222,
      image: 'https://images.pexels.com/photos/20400720/pexels-photo-20400720/free-photo-of-mar-amanecer-paisaje-puesta-de-sol.jpeg',
      title: 'Producto 2',
      price: 1234,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id:333,
      image: 'https://images.pexels.com/photos/20522460/pexels-photo-20522460/free-photo-of-resfriado-frio-glaciar-nieve.jpeg',
      title: 'Producto 3',
      price: 8756,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]


  getAllProducts(){
    return this.productos;
  }

  getProductById(id:number){
    return this.productos.find(producto => producto.id == id);
  }
}
