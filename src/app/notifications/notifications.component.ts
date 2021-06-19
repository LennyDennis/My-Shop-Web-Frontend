import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Product } from '../models/product';
// import { Page } from "tns-core-modules/ui/page";
import { NotificationService } from '../services/notification-service/notification.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  notifications = new MatTableDataSource();

  lowValue: number = 0;
  highValue: number = 5;
  length = this.notifications.data.length;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  pageEvent: PageEvent;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private notificationsAlert: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOutOfStockNotifications();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.notifications.filter = filterValue.trim().toLowerCase();
  }

  getOutOfStockNotifications() {
    this.productService.getOutOfStockNotifications().subscribe(
      (res) => {
        this.notifications = new MatTableDataSource((<any>res).products);
        var products : any[] = [];
        if((<any>res).products){
          for (let product of (<any>res).products) {
            let productId = {
              id:product.productId
            }
            products.push(productId)
          }
          this.productService.clearNotifications(products).subscribe(
            (res) => {
            },
            (err) => {
            }
          );
        }
      },
      (err) => {}
    );
  }
}
