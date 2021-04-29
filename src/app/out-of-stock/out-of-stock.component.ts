import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../models/product';

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
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,sold:10,profit:1000,quantity:1,status:'Active'}
];

@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.css']
})
export class OutOfStockComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'productName','categoryName','stockBalance','action'];
  productsArray = new MatTableDataSource(PRODUCT_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.productsArray.paginator = this.paginator;
      this.productsArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.productsArray.filter = filterValue.trim().toLowerCase();
    }
}
