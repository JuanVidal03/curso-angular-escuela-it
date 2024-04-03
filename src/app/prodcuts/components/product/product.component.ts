import { Component, Input, Output, EventEmitter } from "@angular/core";
// interfas del producto
import { Product } from "@products/models/product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    today = new Date();
    // resiviendo data del padre
    @Input() product!:Product;

    // enviando producto al padre
    @Output() clickedProduct = new EventEmitter<number>();
    
    viewDetail(){
        this.clickedProduct.emit(this.product.id);
    }
}