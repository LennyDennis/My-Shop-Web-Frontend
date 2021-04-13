import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryDialogComponent } from '../dialog-box/category-dialog/category-dialog.component';
import { Category } from '../models/category';

const CATEGORY_DATA: Category[] = [
  {categoryId: 1, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 2, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 3, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 4, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 5, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 6, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 7, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 8, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 9, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"},
  {categoryId: 10, categoryName: 'Hydrogen', totalProducts: 100, status:"Active"}

];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'categoryName', 'action'];
  categoriesArray = new MatTableDataSource(CATEGORY_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.categoriesArray.paginator = this.paginator;
      this.categoriesArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.categoriesArray.filter = filterValue.trim().toLowerCase();
    }

    openDialog(action, obj) {
      console.log
      obj.action = action;
      const dialogRef = this.dialog.open(CategoryDialogComponent, {
        width: "500px",
        data: obj
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Add") {
        this.addRowData(result.data);
      } else if (result.event == "Edit") {
        this.updateRowData(result.data);
      } else if (result.event == "Delete") {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
  }

  updateRowData(row_obj) {

  }

  deleteRowData(row_obj) {

  }

  }





