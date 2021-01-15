import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/Order.model';
import {OrderService} from '../../services/order.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  order: Order = new Order();

  constructor(private location: Location, private orderService: OrderService, private messageService: MessageService, private router: Router) {
  }

  ngOnInit(): void {
    this.orderService.getCurrentOrder().subscribe(res => {
      this.order = res;
    });
  }

  sumeCart(): number {
    if (this.order.shopCart != null) {
      return this.order.shopCart.itemShopCartList.map(item => {
        return item.quantity * item.product.price;
      }).reduce((acc, curr) => acc + curr);
    } else {
      return 0;
    }
  }

  delivery(): number {
    if (this.order.shopCart != null) {
      if (this.order.deliveryType === Order.DeliveryTypeEnum.KI) {
        return 10;
      } else if (this.order.deliveryType === Order.DeliveryTypeEnum.DPU) {
        return 20;
      } else if (this.order.deliveryType === Order.DeliveryTypeEnum.PP) {
        return 20;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  finalise(): void {
    this.orderService.finaliseOrder(this.order.id).subscribe(resp => {
      this.messageService.add({severity: 'success', summary: 'Sukces', detail: 'Zamówienie złożone'});
      this.messageService.add({severity: 'success', summary: 'Sukces', detail: 'Mail z potwierdzeniem wysłany'});
      sessionStorage.removeItem('items');
      sessionStorage.removeItem('cartid');
      sessionStorage.removeItem('orderid');
      this.router.navigateByUrl('/start');
    }, error => {
      this.messageService.add({severity: 'error', summary: 'Blad', detail: 'Wystapił błąd przy skladaniu zamówienia'});
    });
  }

  giveDeliveryName(deliveryType: 'DPU' | 'KI' | 'PP'): string {
    if (deliveryType === 'DPU') {
      return 'Kurier DPD Pobranie';
    } else if (deliveryType === 'KI') {
      return 'Poczta Polska Przedpłata';
    } else if (deliveryType === 'PP') {
      return 'Poczta Polska Pobranie';
    }

  }

  undo(): void {
    this.location.back();
  }
}
