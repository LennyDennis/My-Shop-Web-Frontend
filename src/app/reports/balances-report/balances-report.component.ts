import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Balance } from 'src/app/models/balance';

const BALANCE_DATA: Balance[] = [
  {id: 1,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 2,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 3,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 4,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 5,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 6,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 7,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 8,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 9,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'},
  {id: 10,customer:'Lenny Dennis',product: 'Watch',quantity:2,totalCost:500,paid:100,balance:400,lastPaid:'10/10/2021'}
];

@Component({
  selector: 'app-balances-report',
  templateUrl: './balances-report.component.html',
  styleUrls: ['./balances-report.component.css']
})
export class BalancesReportComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'customerName','product','quantity','cost', 'paid','balance','lastPaid'];
  balancesReportArray = new MatTableDataSource(BALANCE_DATA);

  constructor() {}

    ngOnInit() {
      this.balancesReportArray.paginator = this.paginator;
      this.balancesReportArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.balancesReportArray.filter = filterValue.trim().toLowerCase();
    }

}
