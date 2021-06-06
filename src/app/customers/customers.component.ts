import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer';
import { CustomerDialogComponent } from '../dialog-box/customer-dialog/customer-dialog.component';
import { NotificationService } from '../services/notification-service/notification.service';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'customerName',
    'phoneNumber',
    'productsBought',
    'registeredDate',
    'action',
  ];
  customers = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private _userService: UserService,
    private _customerNotification: NotificationService
  ) {}
  ngOnInit() {
    this.getCustomers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customers.filter = filterValue.trim().toLowerCase();
  }

  getCustomers() {
    // customer role Id = 3
    let customerRoleId = 3;
    this._userService.getUserByRole(customerRoleId).subscribe(
      (res) => {
        let sortByProducts = (<any>res).customers.sort(function (a, b) {
          return b.productsBought - a.productsBought;
        });
        this.customers = new MatTableDataSource(sortByProducts);
        this.customers.paginator = this.paginator;
        this.customers.sort = this.sort;
      },
      (err) => {}
    );
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addCustomer(result.data);
      } else if (result.event == 'Edit') {
        this.editCustomer(result.data);
      } else if (result.event == 'Delete') {
        this.deleteCustomer(result.data);
      }
    });
  }

  addCustomer(userData) {
    console.log(userData);
    let userDetails = {
      name: userData.name,
      phone: userData.phone,
      role: 3,
    };
    console.log(userDetails);

    this._userService.addUSer(userDetails).subscribe(
      (res) => {
        this._customerNotification.showSuccess(res.message);
        this.ngOnInit();
      },
      (err) => {
        this._customerNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }

  editCustomer(userData) {
    let userDetails = {
      id: userData.id,
      name: userData.name,
      phone: userData.phone,
      role: userData.role,
    };
    this._userService.editUser(userDetails).subscribe(
      (res) => {
        this._customerNotification.showSuccess(res.message);
        this.ngOnInit();
      },
      (err) => {
        this._customerNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }

  deleteCustomer(userData) {
    this._userService.deleteUser(userData.id).subscribe(
      (res) => {
        this._customerNotification.showSuccess(res.message);
        this.ngOnInit();
      },
      (err) => {
        this._customerNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }
}
