import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../dialog-box/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  editAction:string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  editProfile(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: "500px",
      data: obj
    });

  dialogRef.afterClosed().subscribe((result) => {
    if (result.event == "AdminEdit") {
      this.adminEditProfile(result.data);
    } else if (result.event == "EmployeeEdit") {
      this.employeeEditProfile(result.data);
    }
  });
}

adminEditProfile(row_obj) {
}

employeeEditProfile(row_obj) {
}

}
