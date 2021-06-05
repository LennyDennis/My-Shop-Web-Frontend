import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MostSold } from 'src/app/models/most-sold';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-most-sold',
  templateUrl: './most-sold.component.html',
  styleUrls: ['./most-sold.component.css'],
})
export class MostSoldComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'productName',
    'categoryName',
    'soldProducts',
    'stockBalance',
    'restockDate',
  ];
  mostSoldProducts = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.getMostSoldProducts();
  }

  getMostSoldProducts() {
    this._productService.getMostSoldProducts().subscribe(
      (res) => {
        let sortedProducts = (<any>res).mostSold.sort(function (a, b) {
          return b.soldProducts - a.soldProducts;
        });
        this.mostSoldProducts = new MatTableDataSource(sortedProducts);
        this.mostSoldProducts.paginator = this.paginator;
        this.mostSoldProducts.sort = this.sort;
      },
      (err) => {}
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mostSoldProducts.filter = filterValue.trim().toLowerCase();
  }
}
