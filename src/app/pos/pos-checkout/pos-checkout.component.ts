import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { SellProduct } from 'src/app/models/sellproduct';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-pos-checkout',
  templateUrl: './pos-checkout.component.html',
  styleUrls: ['./pos-checkout.component.css'],
})
export class PosCheckoutComponent implements OnInit {
  products: SellProduct[] = [];
  customer: Customer;
  cashPaid: number = 0;
  customers = [];
  customerSelected?: string;

  constructor(
    private _cartService: CartService,
    private _userService: UserService,
    private config: NgSelectConfig
  ) {}

  ngOnInit(): void {
    this.products = this._cartService.getCheckoutProducts();
    this.getCustomers();

    // if (this._cartService.getCutomer() != undefined) {
    //   this.customer = this._cartService.getCutomer();
    // }
  }

  getTotal(): number {
    var total = 0;
    for (var i = 0; i < this.products.length; i++) {
      var product = this.products[i];
      total += product.cartSellingPrice * product.cartQuantityToSell;
    }
    return total;
  }

  getCustomers() {
    // customer role Id = 3
    let customerRoleId = 3;
    this._userService.getUserByRole(customerRoleId).subscribe(
      (res) => {
        this.customers = (<any>res).customers;
      },
      (err) => {}
    );
  }

}
