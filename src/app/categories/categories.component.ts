import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryDialogComponent } from '../dialog-box/category-dialog/category-dialog.component';
import { Category } from '../models/category';
import { CategoryService } from '../services/category-service/category.service';
import { NotificationService } from '../services/notification-service/notification.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'categoryName', 'action'];

  constructor(
    public dialog: MatDialog,
    private _categoryService: CategoryService,
    private _productNotification: NotificationService
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.categories.filter = filterValue.trim().toLowerCase();
  }

  getAllCategories() {
    this._categoryService.getAllCategories().subscribe(
      (res) => {
        this.categories = new MatTableDataSource((<any>res).categories);
        this.categories.paginator = this.paginator;
        this.categories.sort = this.sort;
      },
      (err) => {}
    );
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addCategory(result.data);
      } else if (result.event == 'Edit') {
        this.editCategory(result.data);
      } else if (result.event == 'Delete') {
        this.deleteCategory(result.data);
      }
    });
  }

  addCategory(categoryData) {
    let categoryDetails = {
      name: categoryData.categoryName,
    };

    this._categoryService.addCategory(categoryDetails).subscribe(
      (res) => {
        this._productNotification.showSuccess('Category added successfully!');
        this.ngOnInit();
      },
      (err) => {
        this._productNotification.showError(err.error);
      }
    );
  }

  editCategory(categoryData) {
    let categoryDetails = {
      name: categoryData.categoryName,
    };

    this._categoryService
      .editCategory(categoryData.categoryId, categoryDetails)
      .subscribe(
        (res) => {
          this._productNotification.showSuccess(
            'Category edited successfully!'
          );
          this.ngOnInit();
        },
        (err) => {
          this._productNotification.showError(err.error);
        }
      );
  }

  deleteCategory(categoryData) {
    this._categoryService.deleteCategory(categoryData.categoryId).subscribe(
      (res) => {
        this._productNotification.showSuccess('Category deleted successfully');
        this.ngOnInit();
      },
      (err) => {
        this._productNotification.showError(err.error);
      }
    );
  }
}
