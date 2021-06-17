import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { SaleDialogComponent } from 'src/app/dialog-box/sale-dialog/sale-dialog.component';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-pos-balance-payment',
  templateUrl: './pos-balance-payment.component.html',
  styleUrls: ['./pos-balance-payment.component.css'],
})
export class PosBalancePaymentComponent implements OnInit {
  sale: any;
  saleDetailsList = [];
  cashPaid: number;
  previousUrl: string = '';

  constructor(
    public dialog: MatDialog,
    private _salesService: SalesService,
    private routingService: RoutingService,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private router: Router
  ) {
    this.cashPaid = 0;
  }

  ngOnInit() {
    this.routingService.previousUrl$.subscribe((previousUrl: string) => {
        this.previousUrl = previousUrl
    });

    const routeParams = this.route.snapshot.paramMap;
    const balanceIdFromRoute = Number(routeParams.get('balanceId'));
    this.getBalanceDetails(balanceIdFromRoute);
  }

  getBalanceDetails(balanceId) {
    this._salesService.getBalancesById(balanceId).subscribe(
      (res) => {
        let saleInfo: any;
        let saleDetails = [];
        let balanceList = (<any>res).balance;
        balanceList.forEach(function (data) {
          saleInfo = data.sale;
          saleDetails = data.saleDetails;
        });
        this.sale = saleInfo;
        this.saleDetailsList = saleDetails;
      },
      (err) => {

        if(err.error === 'This sale does not have any balance'){
          if(this.previousUrl != null){
            this.router.navigate([this.previousUrl]);
          }else{
            this.router.navigate(['/posHome']);
          }
        }
      }
    );
  }

  completeBalancePayment(){
    var balance = this.sale.balance - this.cashPaid;
    if(balance < 0){
      this.notification.showError("Cash paid is more than balance");
    }else if(this.cashPaid <= 0){
      this.notification.showError("Cash paid can not be zero or less than zero");
    }else{
      this.openDialog('Balance Payment', {});
    }
  }

  openDialog(action, obj) {
    obj.action = action;
    if(action === "Balance Payment"){
      obj.cashPaid = this.cashPaid
    }
    const dialogRef = this.dialog.open(SaleDialogComponent, {
      width: '400px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Balance Payment') {
        this.payBalance();
      }
    });
  }

  payBalance(){
    let balanceDetail = {
      id:this.sale.id,
      cashPaid: this.cashPaid
    }

    this._salesService.clearBalance(balanceDetail).subscribe(
      (res) => {
        this.notification.showSuccess(res.message);
        this.router.navigate([this.previousUrl]);
      },
      (err) => {
        this.notification.showError(err.error);
        this.ngOnInit();
      }
    )
  }
}
