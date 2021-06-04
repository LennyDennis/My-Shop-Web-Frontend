import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Balance } from 'src/app/models/balance';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css'],
})
export class BalancesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'customerName',
    'phoneNumber',
    'total',
    'paid',
    'balance',
    'lastPaid',
    'sellDate',
  ];

  balances = new MatTableDataSource();

  constructor(public dialog: MatDialog, private _salesService: SalesService) {}

  ngOnInit() {
    this.getBalances();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.balances.filter = filterValue.trim().toLowerCase();
  }

  getBalances() {
    this._salesService.getBalances().subscribe(
      (res) => {
        let balanceList = (<any>res).balances;
        let balanceArray = [];
        balanceList.forEach(function (data) {
          balanceArray.push(data.sale);
        });
        this.balances = new MatTableDataSource(balanceArray);
        this.balances.paginator = this.paginator;
        this.balances.sort = this.sort;
      },
      (err) => {}
    );
  }

  openBalanceDetail(obj) {
    let balanceId = obj.id;
  }
}
