import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SellProduct } from 'src/app/models/sellproduct';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-pos-products',
  templateUrl: './pos-products.component.html',
  styleUrls: ['./pos-products.component.css']
})
export class PosProductsComponent implements OnInit {

  @Input() categoryId:String;

  @Output() displayOptionEvent = new EventEmitter<Boolean>();
  @Output() addProductToCartEvent = new EventEmitter<SellProduct>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  showProduct:boolean = false;

  products = new MatTableDataSource();
  categoryName:String;
  cartProduct:SellProduct;

  lowValue: number = 0;
  highValue: number = 5;
  length = this.products.data.length
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  pageEvent: PageEvent;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  constructor(
    private _productService: ProductService,
    private _posNotification: NotificationService
  ) {}

    ngOnInit():void {
      let categoryId = this.categoryId;
      this.getProductsInACategory(categoryId);
    }

    getProductsInACategory(categoryId) {
      this._productService.getCategoryProducts(categoryId).subscribe(
        (res) => {
          this.categoryName = (<any>res).categoryName;
          this.products = new MatTableDataSource((<any>res).products);
        },
        (err) => {}
      );
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.products.filter = filterValue.trim().toLowerCase();
    }

    goToCategories(){
      this.displayOptionEvent.emit(true);
    }

    addProductToCart(product){
      if(product.stockQuantity == 0){
        this._posNotification.showError("This product is not available in stock");
      }else{
        this.cartProduct = {
          cartProductId: product.productId,
          cartName:product.name,
          cartCategoryId:product.categoryId,
          cartCategory:product.category,
          cartBuyingPrice:product.buyingPrice,
          cartSellingPrice:product.sellingPrice,
          cartMaxDiscount:product.maxDiscount,
          cartStockQuantity:product.stockQuantity,
          cartRestockStatus:product.restockStatus,
          cartActivationStatus:product.activationStatus,
          cartModifiedOn:product.modifiedOn,
          cartAddedDate:product.addedDate,
          cartQuantityToSell:1,
          cartDiscount:0
      }

        this.addProductToCartEvent.emit(this.cartProduct);
      }
    }

}
