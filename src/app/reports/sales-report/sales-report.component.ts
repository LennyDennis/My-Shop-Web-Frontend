import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'productName','customerName','phoneNumber','sellerName', 'sellingPrice','quantity','total','date'];
  salesReportArray = new MatTableDataSource(SALE_DATA);

  constructor() {}

    ngOnInit() {
      this.salesReportArray.paginator = this.paginator;
      this.salesReportArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.salesReportArray.filter = filterValue.trim().toLowerCase();
    }

}
