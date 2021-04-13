import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';

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
  selector: 'app-employees-report',
  templateUrl: './employees-report.component.html',
  styleUrls: ['./employees-report.component.css']
})
export class EmployeesReportComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'employeeName','employeeEmail','employeeRole','registeredOn', 'status'];
  employeesReportArray = new MatTableDataSource(EMPLOYEE_DATA);

  constructor() {}

    ngOnInit() {
      this.employeesReportArray.paginator = this.paginator;
      this.employeesReportArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.employeesReportArray.filter = filterValue.trim().toLowerCase();
    }

}
