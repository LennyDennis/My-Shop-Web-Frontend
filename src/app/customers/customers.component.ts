import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer';
import { CustomerDialogComponent } from '../dialog-box/customer-dialog/customer-dialog.component';

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
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'customerName','phoneNumber','productsBought','registeredDate','action'];
  customersArray = new MatTableDataSource(CUSTOMER_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.customersArray.paginator = this.paginator;
      this.customersArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.customersArray.filter = filterValue.trim().toLowerCase();
    }

    openDialog(action, obj) {
      console.log
      obj.action = action;
      const dialogRef = this.dialog.open(CustomerDialogComponent, {
        width: "500px",
        data: obj
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Add") {
        this.addEmployee(result.data);
      } else if (result.event == "Edit") {
        this.editEmployee(result.data);
      } else if (result.event == "Delete") {
        this.deleteEmployee(result.data);
      }
    });
  }

  addEmployee(row_obj) {
  }

  editEmployee(row_obj) {

  }

  deleteEmployee(row_obj) {

  }


}
