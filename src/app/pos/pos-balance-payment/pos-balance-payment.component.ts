import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
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

  constructor(
    public dialog: MatDialog,
    private _salesService: SalesService,
    private route: ActivatedRoute
  ) {
    this.cashPaid = 0;
  }

  ngOnInit() {
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
      (err) => {}
    );
  }
}
