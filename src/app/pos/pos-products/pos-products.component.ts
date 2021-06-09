import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';

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
  selector: 'app-pos-products',
  templateUrl: './pos-products.component.html',
  styleUrls: ['./pos-products.component.css']
})
export class PosProductsComponent implements OnInit {

  @Input() categoryId:String;

  @Output() displayCategoryEvent = new EventEmitter<Boolean>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  showProduct:boolean = false;


  notificationsArray = new MatTableDataSource(PRODUCT_DATA);

  lowValue: number = 0;
  highValue: number = 5;
  length = this.notificationsArray.data.length
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  pageEvent: PageEvent;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  constructor() {}

    ngOnInit():void {
      console.log(this.categoryId)
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.notificationsArray.filter = filterValue.trim().toLowerCase();
    }

    goToCategories(){
      this.displayCategoryEvent.emit();
    }

}
