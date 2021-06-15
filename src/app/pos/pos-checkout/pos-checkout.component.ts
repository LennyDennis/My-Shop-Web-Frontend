import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SellProduct } from 'src/app/models/sellproduct';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-pos-checkout',
  templateUrl: './pos-checkout.component.html',
  styleUrls: ['./pos-checkout.component.css']
})
export class PosCheckoutComponent implements OnInit {

  products: SellProduct[] = [];

  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this._cartService.getCheckoutProducts()
    console.log(this.products)
  }

  getTotal():number{
    var total = 0;
    for(var i = 0; i < this.products.length; i++){
        var product = this.products[i];
        total += (product.cartSellingPrice * product.cartQuantityToSell);
    }
    return total;
  }

}
