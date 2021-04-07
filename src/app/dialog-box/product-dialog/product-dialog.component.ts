import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsComponent } from 'src/app/products/products.component';

export interface Category {
  categoryId: number;
  categoryName: string;
}

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  action:string;
  product_data:any;
  category:string;
  categoryId:number;


  categories: Category[] = [
    {categoryId: 1, categoryName: 'Electronic'},
    {categoryId: 2, categoryName: 'Furniture'},
    {categoryId: 3, categoryName: 'Lithium'},
    {categoryId: 4, categoryName: 'Beryllium'},
    {categoryId: 5, categoryName: 'Boron'},
    {categoryId: 6, categoryName: 'Carbon'},
    {categoryId: 7, categoryName: 'Nitrogen'},
    {categoryId: 8, categoryName: 'Oxygen'},
    {categoryId: 9, categoryName: 'Fluorine'},
    {categoryId: 10, categoryName: 'Neon'}
  ];

  constructor(
    public dialogRef: MatDialogRef<ProductsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:Category
  ) {
    this.product_data = {...data};
    this.action = this.product_data.action;
    if( this.action == "Edit"){
      this.category = this.product_data.category;
      const categorySelected = this.categories.find(c => c.categoryName == this.category);
      this.categoryId = categorySelected.categoryId
    }
  }


  doAction(){
    this.dialogRef.close({event:this.action,data:this.product_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {

  }

}
