import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productRootUrl = 'http://localhost:8080/shop/api/product/';

  constructor(private _http: HttpClient) {}

  public getAllProducts() {
    return this._http.get(this._productRootUrl + 'all');
  }

  public getOutOfStockProducts() {
    return this._http.get(this._productRootUrl + 'outOfStock');
  }

  public getMostSoldProducts() {
    return this._http.get(this._productRootUrl + 'mostSold');
  }

  public getCategoryProducts(categoryId) {
    return this._http.get(
      this._productRootUrl + 'category/products?categoryId=' + categoryId
    );
  }

  addProduct(productDetails) {
    return this._http.post<any>(this._productRootUrl, productDetails).pipe(
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

  editProduct(productDetails) {
    return this._http.put<any>(this._productRootUrl, productDetails).pipe(
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

  deleteProduct(productId) {
    const params = new HttpParams().set('productId', productId);
    return this._http
      .put<any>(this._productRootUrl + 'delete', {}, { params })
      .pipe(
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

  addProductStock(productId, newStock) {
    const params = new HttpParams()
      .set('productId', productId)
      .set('newStock', newStock);
    return this._http
      .put<any>(this._productRootUrl + 'restock', {}, { params })
      .pipe(
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
