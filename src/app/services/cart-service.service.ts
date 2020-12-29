import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemShopCart} from '../models/ItemShopCar.model';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {ShopCart} from '../models/ShopCart.model';
import {map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  addProduct(cartItem: ItemShopCart): Observable<any>{
    if ( sessionStorage.getItem('user') != null ) {
      return this.http.post(SERVER_API_URL + 'api/v1/shopcart/addproduct', cartItem);
    }else {
      let idCart = sessionStorage.getItem('cartid');
      if ( idCart == null){
        idCart = '0';
      }
      return this.http.post(SERVER_API_URL + 'api/v1/shopcart/anon/' + idCart + '/addproduct', cartItem).pipe(
        share(), map(res => {
          console.log(res);
          let shopCart: ShopCart;
          shopCart = res;
          sessionStorage.setItem('cartid', String(shopCart.id) );
          return res;
        })
      );
    }
  }
  getCurrentCart(): Observable<any>{
    if ( sessionStorage.getItem('user') != null ) {
      return this.http.get(SERVER_API_URL + 'api/v1/shopcart/');
    }else{
      let idCart = sessionStorage.getItem('cartid');
      if ( idCart == null){
        idCart = '0';
      }
      return this.http.get(SERVER_API_URL + 'api/v1/shopcart/anon/' + idCart );
    }
  }

  updateCart(cart: ShopCart): Observable<any>{
    if ( sessionStorage.getItem('user') != null ) {
      return this.http.put(SERVER_API_URL + 'api/v1/shopcart/', cart);
    }else{
      return this.http.put(SERVER_API_URL + 'api/v1/shopcart/anon/', cart);
    }
  }

  addShopCartFromSessionToRegister(): Observable<any>{
    const idCart = sessionStorage.getItem('cartid');
    if ( idCart != null){
      sessionStorage.removeItem('cartid');
      return this.http.post(SERVER_API_URL + 'api/v1/shopcart/addshopcart/' + idCart, {}).pipe(
        share(), map(res => {
          let shopCart: ShopCart;
          shopCart = res;
          sessionStorage.setItem('items', String(shopCart.itemShopCartList.length));
          return res;
        })
      );
    } else{
      return this.http.get(SERVER_API_URL + 'api/v1/shopcart/').pipe(
        share(), map(res => {
          let shopCart: ShopCart;
          shopCart = res;
          sessionStorage.setItem('items', String(shopCart.itemShopCartList.length));
          return res;
        })
      );
    }
  }
}

