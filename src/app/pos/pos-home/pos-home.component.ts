import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { SellProduct } from 'src/app/models/sellproduct';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { PosCategoriesComponent } from '../pos-categories/pos-categories.component';
import { PosProductsComponent } from '../pos-products/pos-products.component';

const CATEGORY_DATA: Category[] = [
  {categoryId: 1, categoryName: 'Hydrogen 1', totalProducts: 100, status:"Active"},
  {categoryId: 2, categoryName: 'Hydrogen 2', totalProducts: 100, status:"Active"},
  {categoryId: 3, categoryName: 'Hydrogen 3', totalProducts: 100, status:"Active"},
  {categoryId: 4, categoryName: 'Hydrogen 4', totalProducts: 100, status:"Active"},
  {categoryId: 5, categoryName: 'Hydrogen 5', totalProducts: 100, status:"Active"},
  {categoryId: 6, categoryName: 'Hydrogen 6', totalProducts: 100, status:"Active"},
  {categoryId: 7, categoryName: 'Hydrogen 7', totalProducts: 100, status:"Active"},
  {categoryId: 8, categoryName: 'Hydrogen 8', totalProducts: 100, status:"Active"},
  {categoryId: 9, categoryName: 'Hydrogen 9', totalProducts: 100, status:"Active"},
  {categoryId: 10, categoryName: 'Hydrogen 10', totalProducts: 100, status:"Active"}
];

@Component({
  selector: 'app-pos-home',
  templateUrl: './pos-home.component.html',
  styleUrls: ['./pos-home.component.css']
})
export class PosHomeComponent implements OnInit {


  categoriesArray = CATEGORY_DATA;
  hideItem=[]
  displayOption:Boolean;
  categoryId:String;
  productCartList = []
  total:number = 0;
  products: SellProduct[] = [];

  constructor(
    private _posNotification: NotificationService,
    private _cartService:CartService
  ) { }

  ngOnInit() {
    this.displayOption = true
    this.products = this._cartService.getCheckoutProducts()
    console.log(this.products)
  }

  // showItemDetails = {
  //   hideItem : false
  // }

  // showItemDetails(){
  //   this.hideItem = false
  //   return this.hideItem;
  // }

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
  //   for(var i = 0; i < this.productCartList.length; i++){
  //     var product = this.productCartList[i];
  //     total += (product.cartSellingPrice * product.cartQuantityToSell);
  // }
  }

}
