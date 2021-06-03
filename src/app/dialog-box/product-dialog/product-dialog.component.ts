import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsComponent } from 'src/app/products/products.component';
import { CategoryService } from 'src/app/services/category-service/category.service';

export interface Category {
  categoryId: number;
  categoryName: string;
}

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
})
export class ProductDialogComponent implements OnInit {
  action: string;
  product_data: any;
  category: string;
  categoryId: number;

  categories: Category[];

  constructor(
    public dialogRef: MatDialogRef<ProductsComponent>,
    private _categoryService: CategoryService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Category
  ) {
    this.getAllCategories();
    this.product_data = { ...data };
    this.action = this.product_data.action;
  }

  getAllCategories() {
    this._categoryService.getAllCategories().subscribe(
      (res) => {
        this.categories = (<any>res).categories;

        if (this.action == 'Edit') {
          this.category = this.product_data.category;
          const categorySelected = this.categories.find(
            (c) => c.categoryName == this.category
          );
          this.categoryId = categorySelected.categoryId;
        }
      },
      (err) => {}
    );
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.product_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {}
}
