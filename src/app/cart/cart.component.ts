import {Component, OnInit} from '@angular/core';
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
  change = false;


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
    this.updateCart();
  }

  private updateCart(): void {
    this.cartService.updateCart(this.cart).subscribe(res => {
      if (res.itemShopCartList.length != null) {
        sessionStorage.setItem('items', res.itemShopCartList.length);
      } else {
        sessionStorage.setItem('items', String(0));
      }
    }, error => {

    });
  }

  public sumCart(): number {
    return this.cart.itemShopCartList.map(item => item.quantity * item.product.price).reduce((a, b) => a + b, 0);
  }

  public minus(item: ItemShopCart): void {
    item.quantity = item.quantity - 1;
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    this.change = true;
  }

  public plus(item: ItemShopCart): void {
    item.quantity += 1;
    this.change = true;
  }


  updateIfNecessary(): void {
    if (this.change === true) {
      this.updateCart();
      this.change = false;
    }
  }
}
