import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private _salesUrl = 'http://localhost:8080/shop/api/sell/';
  private _balanceUrl = 'http://localhost:8080/shop/api/balance';

  constructor(private _http: HttpClient) {}

  public getGeneralSales() {
    return this._http.get(this._salesUrl);
  }

  public getBalances() {
    return this._http.get(this._balanceUrl);
  }
}
