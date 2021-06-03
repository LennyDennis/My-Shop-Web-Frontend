import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Balance } from 'src/app/models/balance';
import { Product } from 'src/app/models/product';

const BALANCE_DATA: Balance[] = [
  {id: 1,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 2,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 3,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 4,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 5,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 6,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 7,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 8,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 9,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 10,customer:'Lenny Dennis',phoneNumber: 'Watch',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'}
];

@Component({
  selector: 'app-pos-balances',
  templateUrl: './pos-balances.component.html',
  styleUrls: ['./pos-balances.component.css']
})
export class PosBalancesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // notificationsArray = new MatTableDataSource(PRODUCT_DATA);
  balancesArray = new MatTableDataSource(BALANCE_DATA);


  lowValue: number = 0;
  highValue: number = 5;
  length = this.balancesArray.data.length
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  pageEvent: PageEvent;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  constructor() {}

    ngOnInit() {
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.balancesArray.filter = filterValue.trim().toLowerCase();
    }

}
