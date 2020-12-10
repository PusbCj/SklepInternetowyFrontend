import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemShopCart} from '../models/ItemShopCar.model';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {ShopCart} from '../models/ShopCart.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  addProduct(cartItem: ItemShopCart): Observable<any>{
     return this.http.post(SERVER_API_URL + 'api/v1/shopcart/addproduct' , cartItem);
  }
  getCurrentCart(): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/shopcart/');
  }

  updateCart(cart: ShopCart): Observable<any>{
    return this.http.put( SERVER_API_URL + 'api/v1/shopcart/', cart);
  }
}
