import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-pos-products',
  templateUrl: './pos-products.component.html',
  styleUrls: ['./pos-products.component.css']
})
export class PosProductsComponent implements OnInit {

  @Input() categoryId:String;

  @Output() displayCategoryEvent = new EventEmitter<Boolean>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  showProduct:boolean = false;

  products = new MatTableDataSource();
  categoryName:String;

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
    private _productService: ProductService  ) {}

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
      this.displayCategoryEvent.emit();
    }

}
