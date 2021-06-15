import {Component, OnInit} from '@angular/core';
import { Category } from 'src/app/models/category';
import { SellProduct } from 'src/app/models/sellproduct';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pos-home',
  templateUrl: './pos-home.component.html',
  styleUrls: ['./pos-home.component.css']
})


export class PosHomeComponent implements OnInit {

    hideItem=[]
    displayOption:Boolean;
    categoryId:String;
    productCartList = []
    total:number = 0;
    products: SellProduct[] = [];
    customers = []
    customerSelected?: string;

    public model: any;
    selectCustomer: FormGroup;

    constructor(
      private _posNotification: NotificationService,
      private _cartService:CartService,
      private _userService: UserService,
      private config: NgSelectConfig
    ) {
      this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
     }

    ngOnInit() {
      this.displayOption = true
      this.products = this._cartService.getCheckoutProducts()
      this.getCustomers();


      this.selectCustomer = new FormGroup({
        customer: new FormControl()
     });

    }

  setDisplayOption(option){
    this.displayOption = option
  }

  setCategoryId(categoryId){
    this.categoryId = categoryId
  }

  addProductToCart(product){
    let productExist = this.productCartList.find(cartProduct => cartProduct.cartProductId === product.cartProductId);
    if(productExist !== undefined){
      this._posNotification.showWarning("Product already exists in cart");
    }else{
      this.productCartList.push(product)
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getTotal():number{
    var total = 0;
    for(var i = 0; i < this.productCartList.length; i++){
        var product = this.productCartList[i];
        total += (product.cartSellingPrice * product.cartQuantityToSell);
    }
    return total;
  }

  onClick(item) {
    Object.keys(this.hideItem).forEach(cartItem => {
      this.hideItem[cartItem] = false;
    });
    this.hideItem[item.id] = true;
  }

  goToCheckOut(){
    this._cartService.addProductsToCheckout(this.productCartList);
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
