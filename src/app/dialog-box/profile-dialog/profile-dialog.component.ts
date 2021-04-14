import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesComponent } from 'src/app/employees/employees.component';
import { Employee } from 'src/app/models/employee';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {
  action:string;
  user_data:any;
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
    this.user_data = {...data};
    this.action = this.user_data.action;
    if( this.action == "Edit"){
      this.role = this.user_data.role;
      const roleSelected = this.roles.find(r => r.name == this.role);
      this.roleId = roleSelected.id
    }
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.user_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
