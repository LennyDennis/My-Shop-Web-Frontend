import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersComponent } from 'src/app/customers/customers.component';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css'],
})
export class CustomerDialogComponent implements OnInit {
  action: string;
  customer_data: any;

  constructor(
    public dialogRef: MatDialogRef<CustomersComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {
    this.customer_data = { ...data };
    this.action = this.customer_data.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.customer_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {}
}
