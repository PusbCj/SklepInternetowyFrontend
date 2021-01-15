import {Component, OnInit} from '@angular/core';
import {Order} from '../models/Order.model';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderList: Array<Order>;

  constructor(private orderService: OrderService) {
    this.orderList = new Array<Order>();
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.orderService.getAllOrderByUser().subscribe(res => {
      this.orderList = res.content;
      console.log(res);
    });
  }


  totalOrder(order: Order): number {
    return order.shopCart.itemShopCartList
      .map(x => x.quantity * x.product.price)
      .reduce((x, y) => x + y) + this.delivery(order);
  }

  giveStatus(orderStatus: 'CLOSE' | 'CREATE'): string {
    if (orderStatus === 'CLOSE') {
      return 'W REALIZACJI';
    } else {
      return 'ROZPOCZĘTY';
    }
  }

  delivery(order: Order): number {
    if (order.shopCart != null) {
      if (order.deliveryType === Order.DeliveryTypeEnum.KI) {
        return 10;
      } else if (order.deliveryType === Order.DeliveryTypeEnum.DPU) {
        return 20;
      } else if (order.deliveryType === Order.DeliveryTypeEnum.PP) {
        return 20;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
}
