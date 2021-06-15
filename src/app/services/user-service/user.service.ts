import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userRootUrl = 'http://localhost:8080/shop/api/user';

  constructor(private _http: HttpClient) {}

  public getUserByRole(roleId) {
    const params = new HttpParams().set('userRole', roleId);
    return this._http.get(this._userRootUrl + '/role', { params });
  }

  public getUserDetails(userId) {
    const params = new HttpParams().set('userId', userId);
    return this._http.get(this._userRootUrl + '/user', { params });
  }

  addUSer(userDetails) {
    return this._http.post<any>(this._userRootUrl, userDetails).pipe(
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

  editUser(userDetails) {
    return this._http.put<any>(this._userRootUrl, userDetails).pipe(
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

  deleteUser(userId) {
    const params = new HttpParams().set('userId', userId);
    return this._http
      .put<any>(this._userRootUrl + '/delete', {}, { params })
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
