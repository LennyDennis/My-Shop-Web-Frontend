import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer';

const CUSTOMER_DATA: Customer[] = [
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'},
  {id: 1, name: 'Watch',phoneNumber:'0792257242',productsBought:100, totalCashPaid:100, registeredDate:'10/10/2020'}

];

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'customerName','customerPhone','productsBought','cashPaid', 'registeredOn'];
  customersReportArray = new MatTableDataSource(CUSTOMER_DATA);

  constructor() {}

    ngOnInit() {
      this.customersReportArray.paginator = this.paginator;
      this.customersReportArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.customersReportArray.filter = filterValue.trim().toLowerCase();
    }

}
