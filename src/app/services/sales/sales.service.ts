import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private _salesUrl = 'http://localhost:8080/shop/api/sell/';
  private _balanceUrl = 'http://localhost:8080/shop/api/balance/';

  constructor(private _http: HttpClient) {}

  public getGeneralSales() {
    return this._http.get(this._salesUrl);
  }

  public getBalances() {
    return this._http.get(this._balanceUrl);
  }

  public getBalancesById(balanceId) {
    const params = new HttpParams().set('balanceId', balanceId);
    return this._http.get(this._balanceUrl + 'detail', { params });
  }

  public createSale(saleDetails){
    return this._http.post<any>(this._salesUrl, saleDetails).pipe(
      map(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      )
    );
  }

  public clearBalance(balanceDetails){
    return this._http.put<any>(this._balanceUrl, balanceDetails).pipe(
      map(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      )
    );
  }
}
