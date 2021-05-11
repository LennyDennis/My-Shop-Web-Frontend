import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Balance } from 'src/app/models/balance';

const BALANCE_DATA: Balance[] = [
  {id: 1,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 2,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 3,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 4,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 5,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 6,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 7,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 8,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 9,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'},
  {id: 10,customer:'Lenny Dennis',phoneNumber:'0700000000',total:500,paid:100,balance:400,lastPaid:'10/10/2021',sellDate:'10/10/2021'}
];

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'customerName', 'phoneNumber','total','paid', 'balance','lastPaid','sellDate'];
  balancesArray = new MatTableDataSource(BALANCE_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.balancesArray.paginator = this.paginator;
      this.balancesArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.balancesArray.filter = filterValue.trim().toLowerCase();
    }

}
