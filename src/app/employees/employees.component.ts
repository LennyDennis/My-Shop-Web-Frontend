import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeDialogComponent } from '../dialog-box/employee-dialog/employee-dialog.component';

const EMPLOYEE_DATA: Employee[] = [
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
  {id: 1, name: 'Watch',email:'lennydennis@gmail.com',role:'Admin',registeredDate:'10/10/2020',status:'Active'},
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'employeeName','email','role','registeredDate','action'];
  employeesArray = new MatTableDataSource(EMPLOYEE_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.employeesArray.paginator = this.paginator;
      this.employeesArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.employeesArray.filter = filterValue.trim().toLowerCase();
    }

    openDialog(action, obj) {
      console.log
      obj.action = action;
      const dialogRef = this.dialog.open(EmployeeDialogComponent, {
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
