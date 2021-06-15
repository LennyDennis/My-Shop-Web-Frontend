import { Injectable } from '@angular/core';
import { SellProduct } from 'src/app/models/sellproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: SellProduct[] = [];

  constructor() { }

  addProductToCheckout(product: SellProduct) {
    this.products.push(product);
  }

  addProductsToCheckout(products: SellProduct[]) {
    this.products = products;
  }

  getCheckoutProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

}
