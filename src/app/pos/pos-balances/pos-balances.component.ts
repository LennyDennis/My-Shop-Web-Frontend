import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Balance } from 'src/app/models/balance';
import { Product } from 'src/app/models/product';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-pos-balances',
  templateUrl: './pos-balances.component.html',
  styleUrls: ['./pos-balances.component.css'],
})
export class PosBalancesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  balances = new MatTableDataSource();

  lowValue: number = 0;
  highValue: number = 5;
  length = this.balances.data.length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  pageEvent: PageEvent;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  constructor(
    public dialog: MatDialog,
    private _salesService: SalesService,
  ) {}
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
}
