import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sale } from 'src/app/models/sale';

const SALE_DATA: Sale[] = [
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
  {id: 1, product: 'Watch',customer:'Lenny Dennis', phoneNumber: '07343434344',seller:'Macharia Dennis',sellingPrice:200,total:50,balance:200,quantity:1,date:'10/10/2021'},
];

@Component({
  selector: 'app-general-sales',
  templateUrl: './general-sales.component.html',
  styleUrls: ['./general-sales.component.css']
})
export class GeneralSalesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'productName','customerName','sellerName','sellingPrice', 'total','quantity','date'];
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
