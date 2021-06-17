import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrls: ['./sale-dialog.component.css']
})
export class SaleDialogComponent implements OnInit {
  action: string;
  saleData: any;

  constructor(
    public dialogRef: MatDialogRef<CategoriesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Sale
  ) {
    this.saleData = { ...data };
    this.action = this.saleData.action;
  }

  confirm() {
    this.dialogRef.close({ event: this.action, data: this.saleData });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {}
}
