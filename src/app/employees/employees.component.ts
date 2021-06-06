import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeDialogComponent } from '../dialog-box/employee-dialog/employee-dialog.component';
import { NotificationService } from '../services/notification-service/notification.service';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'employeeName',
    'email',
    'role',
    'registeredDate',
    'action',
  ];
  employees = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private _userService: UserService,
    private _userNotification: NotificationService
  ) {}
  ngOnInit() {
    this.getEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employees.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    // employee role Id = 2
    let employeeRoleId = 2;
    this._userService.getUserByRole(employeeRoleId).subscribe(
      (res) => {
        this.employees = new MatTableDataSource((<any>res).employees);
        this.employees.paginator = this.paginator;
        this.employees.sort = this.sort;
      },
      (err) => {}
    );
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addEmployee(result.data);
      } else if (result.event == 'Edit') {
        this.editEmployee(result.data);
      } else if (result.event == 'Delete') {
        this.deleteEmployee(result.data);
      }
    });
  }

  addEmployee(userData) {
    let userDetails = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      role: userData.role,
    };

    this._userService.addUSer(userDetails).subscribe(
      (res) => {
        this._userNotification.showSuccess(res.message);
        this.ngOnInit();
      },
      (err) => {
        this._userNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }

  editEmployee(userData) {
    let userDetails = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      role: userData.role,
    };

    console.log(userDetails);
    this._userService.editUser(userDetails).subscribe(
      (res) => {
        this._userNotification.showSuccess('User edited successfully!');
        this.ngOnInit();
      },
      (err) => {
        this._userNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }

  deleteEmployee(userData) {
    this._userService.deleteUser(userData.id).subscribe(
      (res) => {
        this._userNotification.showSuccess('User deleted successfully');
        this.ngOnInit();
      },
      (err) => {
        this._userNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }
}
