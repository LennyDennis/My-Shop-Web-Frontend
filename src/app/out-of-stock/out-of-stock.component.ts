import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDialogComponent } from '../dialog-box/product-dialog/product-dialog.component';
import { Product } from '../models/product';
import { NotificationService } from '../services/notification-service/notification.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.css'],
})
export class OutOfStockComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'productName',
    'categoryName',
    'stockBalance',
    'action',
  ];
  products = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private _productService: ProductService,
    private _outOfStockNotification: NotificationService
  ) {}

  ngOnInit() {
    this.getOutOfStockProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }

  getOutOfStockProducts() {
    this._productService.getOutOfStockProducts().subscribe(
      (res) => {
        this.products = new MatTableDataSource((<any>res).products);
        this.products.paginator = this.paginator;
        this.products.sort = this.sort;
      },
      (err) => {}
    );
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add Stock') {
        this.addProductStock(result.data);
      }
    });
  }

  addProductStock(productData) {
    let productId = productData.productId;
    let newStock = productData.newStock;
    this._productService.addProductStock(productId, newStock).subscribe(
      (res) => {
        this._outOfStockNotification.showSuccess('Stock added successfully');
        this.ngOnInit();
      },
      (err) => {
        this._outOfStockNotification.showError(err.error);
        this.ngOnInit();
      }
    );
  }
}
