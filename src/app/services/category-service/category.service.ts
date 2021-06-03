import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _categoryRootUrl = 'http://localhost:8080/shop/api/category/';

  constructor(private _http: HttpClient) {}

  public getAllCategories() {
    return this._http.get(this._categoryRootUrl + 'categories');
  }

  addCategory(categoryDetails) {
    return this._http.post<any>(this._categoryRootUrl, categoryDetails).pipe(
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

  editCategory(categoryId, categoryDetails) {
    const params = new HttpParams().set('categoryId', categoryId);
    return this._http
      .put<any>(this._categoryRootUrl + 'edit', categoryDetails, { params })
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

  deleteCategory(categoryId) {
    const params = new HttpParams().set('categoryId', categoryId);
    return this._http
      .put<any>(this._categoryRootUrl + 'delete', {}, { params })
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
