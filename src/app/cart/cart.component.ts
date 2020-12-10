import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../models/Product.model';
import {CartServiceService} from '../services/cart-service.service';
import {ShopCart} from '../models/ShopCart.model';
import {ItemShopCart} from '../models/ItemShopCar.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listproduct: Array<Product>;
  cart: ShopCart;


  constructor(private cartService: CartServiceService) {
    this.listproduct = new Array<Product>();
  }

  ngOnInit(): void {
    this.getCart();
  }

  private getCart() {
    this.cartService.getCurrentCart().subscribe(res => {
      this.cart = res;
      if (res.itemShopCartList.length != null) {
        sessionStorage.setItem('items', res.itemShopCartList.length);
      } else {
        sessionStorage.setItem('items', String(0));
      }
    }, error => {
      sessionStorage.removeItem('items');
    });
  }

  delete(item: ItemShopCart): void {
    // tslint:disable-next-line:triple-equals
    this.cart.itemShopCartList = this.cart.itemShopCartList.filter(x => x != item);
    this.cartService.updateCart(this.cart).subscribe(res => {
        this.cart = res ;
        if (res.itemShopCartList.length != null) {
        sessionStorage.setItem('items', res.itemShopCartList.length);
      } else {
        sessionStorage.setItem('items', String(0));
      }
    }, error => {

    });
  }
}
