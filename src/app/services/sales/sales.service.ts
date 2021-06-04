import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private _productRootUrl = 'http://localhost:8080/shop/api/sell/';

  constructor(private _http: HttpClient) {}

  public getGeneralSales() {
    return this._http.get(this._productRootUrl);
  }
}
