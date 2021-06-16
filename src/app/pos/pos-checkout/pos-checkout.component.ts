import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SaleDialogComponent } from 'src/app/dialog-box/sale-dialog/sale-dialog.component';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { SellProduct } from 'src/app/models/sellproduct';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-pos-checkout',
  templateUrl: './pos-checkout.component.html',
  styleUrls: ['./pos-checkout.component.css'],
})
export class PosCheckoutComponent implements OnInit {
  products: SellProduct[] = [];
  customer: Customer;
  cashPaid: number = 0;
  customers = [];
  customerSelected?: string;

  constructor(
    public dialog: MatDialog,
    private _cartService: CartService,
    private _userService: UserService,
    private notification: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this._cartService.getCheckoutProducts();
    // if(this.products.length > 0){
    //   this.getCustomers();
    // }else{
    //   this.router.navigate(["/posHome"]);
    // }
    this.getCustomers();

  }

  getTotal(): number {
    var total = 0;
    for (var i = 0; i < this.products.length; i++) {
      var product = this.products[i];
      total += product.cartSellingPrice * product.cartQuantityToSell;
    }
    return total;
  }

  getCustomers() {
    // customer role Id = 3
    let customerRoleId = 3;
    this._userService.getUserByRole(customerRoleId).subscribe(
      (res) => {
        this.customers = (<any>res).customers;
      },
      (err) => {}
    );
  }

  completeCheckOut() {
    if (this.products.length > 0) {
      var balance = this.getTotal() - this.cashPaid;
      if (balance > 0) {
        if (this.customerSelected != undefined) {
          this.selectCustomer()
        } else {
          this.notification.showError(
            'You must select a customer to checkout with balance'
          );
        }
      }else if(balance < 0){
        this.notification.showError(
          'Cash paid is more than required! Check cash paid!'
        );
      } else {
        if (this.customerSelected != undefined) {
          this.selectCustomer()
        }else{
          this.proceedToCheckOut(null);
        }
      }
    } else {
      this.notification.showError('You can not checkout! No product exists');
    }
  }

  selectCustomer(){
    const customer = this.customers.find(
      (c) => c.id == this.customerSelected
    );
    this.proceedToCheckOut(customer);
  }

  proceedToCheckOut(customer) {
    console.log(this.products);
    console.log(customer);
    this.openDialog('Confirm Sale', {})

  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(SaleDialogComponent, {
      width: '380px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Confirm Sale') {
        this.confirmSale(result.data);
      } else if (result.event == 'Pay Balance') {
        this.payBalance(result.data);
      }
    });
  }

  confirmSale(saleData){

  }

  payBalance(balanceData){

  }

}
