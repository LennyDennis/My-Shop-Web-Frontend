import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { SellProduct } from 'src/app/models/sellproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: SellProduct[] = [];
  customer: Customer;

  constructor() { }

  addProductToCheckout(product: SellProduct) {
    this.products.push(product);
  }

  addCartDetailsToCheckout(products: SellProduct[],customer: Customer) {
    this.products = products;
    if(customer){
      this.customer = customer
    }
  }



  getCheckoutProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

}
