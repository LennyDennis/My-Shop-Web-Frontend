import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productRootUrl = "http://localhost:8080/shop/api/product"

  constructor(private _http:HttpClient) { }

  public getAllProducts(){
    return this._http.get(this._productRootUrl)
  }

  public getCategoryProducts(categoryId){
    return this._http.get(this._productRootUrl+"category/products?categoryId="+categoryId)
  }

  addProduct(productDetails){
    return this._http.post<any>(this._productRootUrl,productDetails)
      .pipe(
        map(result =>{
          return result;
        }, error =>{
          return error;
        })
      );
  }

  editProduct(productDetails){
    return this._http.put<any>(this._productRootUrl,productDetails)
      .pipe(
        map(result =>{
          return result;
        }, error =>{
          return error;
        })
      );
  }

  deleteProduct(productId){
    return this._http.put<any>(this._productRootUrl+"delete?productId",productId)
      .pipe(
        map(result =>{
          return result;
        }, error =>{
          return error;
        })
      );
  }
}
