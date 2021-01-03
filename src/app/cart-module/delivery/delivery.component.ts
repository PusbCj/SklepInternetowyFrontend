import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/Order.model';
import {Address} from '../../models/Address.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  order: Order = new Order();
  selectedPostMethod = 0;


  constructor(private orderService: OrderService) {
    this.order.address = new Address();
  }

  ngOnInit(): void {
    this.orderService.getCurrentOrder().subscribe(res => {
      this.order = res;
    });
  }

}
