import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesComponent } from 'src/app/employees/employees.component';
import { Employee } from 'src/app/models/employee';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  action:string;
  employee_data:any;
  role:string;
  roleId:number;

  roles: Role[] = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Employee'},
  ];

  constructor(
    public dialogRef: MatDialogRef<EmployeesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:Employee
  ) {
    this.employee_data = {...data};
    this.action = this.employee_data.action;
    if( this.action == "Edit"){
      this.role = this.employee_data.role;
      const roleSelected = this.roles.find(role => role.name  == this.role);
      this.roleId = roleSelected.id
    }
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.employee_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
