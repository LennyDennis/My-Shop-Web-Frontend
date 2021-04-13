import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sale } from 'src/app/models/sale';

const SALE_DATA: Sale[] = [
  {id: 1, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 2, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 3, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 4, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 5, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 6, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 7, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 8, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 9, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'},
  {id: 10, product: 'Watch',customer:'Lenny Dennis',seller:'Macharia Dennis',sellingPrice:200,pricePaid:50,quantity:1,date:'10/10/2021'}
];

@Component({
  selector: 'app-general-sales',
  templateUrl: './general-sales.component.html',
  styleUrls: ['./general-sales.component.css']
})
export class GeneralSalesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'productName','customerName','sellerName','sellingPrice', 'pricePaid','quantity','date'];
  productsArray = new MatTableDataSource(SALE_DATA);

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
