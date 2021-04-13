import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category';

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
  selector: 'app-categories-report',
  templateUrl: './categories-report.component.html',
  styleUrls: ['./categories-report.component.css']
})
export class CategoriesReportComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'categoryName', 'totalProducts', 'categoryStatus'];
  categoriesReportArray = new MatTableDataSource(CATEGORY_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.categoriesReportArray.paginator = this.paginator;
      this.categoriesReportArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.categoriesReportArray.filter = filterValue.trim().toLowerCase();
    }

}
