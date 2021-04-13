import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  action:string;
  category_data:any;

  constructor(
    public dialogRef: MatDialogRef<CategoriesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:Category
  ) {
    console.log(data)
    this.category_data = {...data};
    this.action = this.category_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.category_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
