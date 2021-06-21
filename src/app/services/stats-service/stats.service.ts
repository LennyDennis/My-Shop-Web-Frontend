import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  private _statsRootUrl = 'http://localhost:8080/shop/api/dashboard/';

  constructor(private _http: HttpClient) {}

  public getStats() {
    return this._http.get(this._statsRootUrl + "all", {});
  }

  public getStatsByUser(userId) {
    const params = new HttpParams().set('userId', userId);
    return this._http.get(this._statsRootUrl+"user", {params});
  }

}
