import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { SellProduct } from 'src/app/models/sellproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: SellProduct[] = [];
  // customer: Customer;

  constructor() { }

  addProductToCheckout(product: SellProduct) {
    this.products.push(product);
  }

  addCartDetailsToCheckout(products: SellProduct[]) {
    this.products = products;
    // if(customer != undefined){
    //   this.customer = customer
    // }
  }

  getCheckoutProducts() {
    return this.products;
  }

  // getCutomer() {
  //   return this.customer;
  // }

  clearCart() {
    this.products = [];
    return this.products;
  }

}
