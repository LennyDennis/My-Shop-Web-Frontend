import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SellProduct } from 'src/app/models/sellproduct';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-home',
  templateUrl: './pos-home.component.html',
  styleUrls: ['./pos-home.component.css'],
})
export class PosHomeComponent implements OnInit {
  hideItem = [];
  displayOption: Boolean;
  categoryId: String;
  productCartList = [];
  total: number = 0;
  products: SellProduct[] = [];

  constructor(
    private _posNotification: NotificationService,
    private _cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayOption = true;
    this.products = this._cartService.getCheckoutProducts();
  }

  setDisplayOption(option) {
    this.displayOption = option;
  }

  setCategoryId(categoryId) {
    this.categoryId = categoryId;
  }

  addProductToCart(product) {
    let productExist = this.productCartList.find(
      (cartProduct) => cartProduct.cartProductId === product.cartProductId
    );
    if (productExist !== undefined) {
      this._posNotification.showError('Product already exists in cart');
    } else {
      this.productCartList.push(product);
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getTotal(): number {
    var total = 0;
    for (var i = 0; i < this.productCartList.length; i++) {
      var product = this.productCartList[i];
      total += product.cartSellingPrice * product.cartQuantityToSell;
    }
    return total;
  }

  onClick(item) {
    Object.keys(this.hideItem).forEach((cartItem) => {
      this.hideItem[cartItem] = false;
    });
    this.hideItem[item.id] = true;
  }

  goToCheckOut(url) {
    if (this.productCartList.length > 0) {
      this._cartService.addCartDetailsToCheckout(
        this.productCartList
      );
      this.router.navigate([url]).then( (e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });

    } else {
      this._posNotification.showError(
        'You must have product on cart to checkout'
      );
    }
  }

  removeProductFromCart(product){
    let productToDelete = this.productCartList.find(
      (cartProduct) => cartProduct.cartProductId === product.cartProductId
    );
    if (productToDelete !== undefined) {
      const index: number = this.productCartList.indexOf(product);
      if (index !== -1) {
          this.productCartList.splice(index, 1);
      }

    }
  }
}
