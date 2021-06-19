import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications = [];

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
  }


  getOutOfStockNotifications() {
    this.productService.getOutOfStockNotifications().subscribe(
      (res) => {
        this.notifications = (<any>res).products;
      },
      (err) => {}
    );
  }

}
