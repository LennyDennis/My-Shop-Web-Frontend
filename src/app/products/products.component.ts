import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductDialogComponent } from '../dialog-box/product-dialog/product-dialog.component';
import { NotificationService } from '../services/notification-service/notification.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = [
    'no',
    'productName',
    'categoryName',
    'buyingPrice',
    'sellingPrice',
    'maxDiscount',
    'quantity',
    'status',
    'action',
  ];
  products = new MatTableDataSource();
  //active
  activationStatus = 1;

  constructor(
    public dialog: MatDialog,
    private _productService: ProductService,
    private _productNotification: NotificationService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }

  getAllProducts() {
    this._productService.getAllProducts().subscribe(
      (res) => {
        this.products = new MatTableDataSource((<any>res).products);
        this.products.paginator = this.paginator;
        this.products.sort = this.sort;
      },
      (err) => {}
    );
  }

  openDialog(action, obj) {
    console.log;
    obj.action = action;
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addProduct(result.data);
      } else if (result.event == 'Edit') {
        this.editProduct(result.data);
      } else if (result.event == 'Delete') {
        this.deleteProduct(result.data);
      } else if (result.event == 'Add Stock') {
        this.addProductStock(result.data);
      }
    });
  }

  addProduct(productData) {
    let productDetails = {
      name: productData.productName,
      category: productData.categoryName,
      buyingPrice: productData.buyingPrice,
      sellingPrice: productData.sellingPrice,
      maxDiscount: productData.maxDiscount,
    };

    this._productService.addProduct(productDetails).subscribe(
      (res) => {
        this._productNotification.showSuccess('Product added successfully!');
      },
      (err) => {
        console.log(err);
        this._productNotification.showError(
          'Oops! Unsuccessful. Please try again.'
        );
      }
    );
  }

  editProduct(row_obj) {}

  deleteProduct(row_obj) {}

  addProductStock(row_obj) {}
}
