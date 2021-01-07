import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {Order} from '../models/Order.model';
import {map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getCurrentOrder(): Observable<any>{
    if (sessionStorage.getItem('user') != null) {
    return this.http.get(SERVER_API_URL + 'api/v1/order/current/');
    }else if (sessionStorage.getItem('orderid') != null){
      return this.http.get(SERVER_API_URL + 'api/v1/order/notlogged/' + sessionStorage.getItem('orderid'));
    } else{
      return this.http
        .get(SERVER_API_URL + 'api/v1/order/notlogged/getnew/' + sessionStorage.getItem('cartid'))
        .pipe(share(), map(res => {
          let order: Order;
          order = res;
          sessionStorage.setItem('orderid', String(order.id));
          return res;
        }));
    }
  }

  updateOrder(id: number, order: Order): Observable<any>{
    if (sessionStorage.getItem('user') != null) {
      return this.http.patch(SERVER_API_URL + 'api/v1/order/' + id, order);
    }else {
      return this.http.patch(SERVER_API_URL + 'api/v1/order/notlogged/update/', order);
    }
  }

  finaliseOrder(id: number): Observable<any>{
    if (sessionStorage.getItem('user') != null) {
      return this.http.get(SERVER_API_URL + 'api/v1/order/finalise/' + id);
    } else{
      return this.http.get(SERVER_API_URL + 'api/v1/order/notlogged/finalise/' + id)
        .pipe(share(), map( res => {
          return res;
        }));
    }
  }
}
