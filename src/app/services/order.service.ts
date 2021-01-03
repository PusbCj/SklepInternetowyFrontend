import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getCurrentOrder(): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/order/current/');
  }
}
