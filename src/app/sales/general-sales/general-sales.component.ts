import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-general-sales',
  templateUrl: './general-sales.component.html',
  styleUrls: ['./general-sales.component.css'],
})
export class GeneralSalesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'productName',
    'sellerName',
    'sellingPrice',
    'quantity',
    'total',
    'date',
  ];
  sales = new MatTableDataSource();

  constructor(public dialog: MatDialog, private _salesService: SalesService) {}

  ngOnInit() {
    this.getGeneralSales();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sales.filter = filterValue.trim().toLowerCase();
  }

  getGeneralSales() {
    this._salesService.getGeneralSales().subscribe(
      (res) => {
        this.sales = new MatTableDataSource((<any>res).sales);
        this.sales.paginator = this.paginator;
        this.sales.sort = this.sort;
      },
      (err) => {}
    );
  }
}
