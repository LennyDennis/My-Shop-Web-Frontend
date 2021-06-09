import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
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

const PRODUCT_DATA: Product[] = [
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'},
  {id: 1, name: 'Watchjhb',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'}
];

@Component({
  selector: 'app-pos-home',
  templateUrl: './pos-home.component.html',
  styleUrls: ['./pos-home.component.css']
})
export class PosHomeComponent implements OnInit {
  categoriesArray = CATEGORY_DATA;
  productsArray = PRODUCT_DATA;
  hideItem=[]

  constructor() { }

  ngOnInit() {
  }

  // showItemDetails = {
  //   hideItem : false
  // }

  // showItemDetails(){
  //   this.hideItem = false
  //   return this.hideItem;
  // }

  onClick(item) {
    Object.keys(this.hideItem).forEach(cartItem => {
      this.hideItem[cartItem] = false;
    });
    this.hideItem[item.id] = true;
  }

}
