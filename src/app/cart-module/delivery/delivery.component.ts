import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/Order.model';
import {Address} from '../../models/Address.model';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  order: Order = new Order();
  order1: FormGroup;
  selectedPostMethod = 0;


  constructor(private orderService: OrderService, private formBuilder: FormBuilder) {
    this.order.address = new Address();
  }

  ngOnInit(): void {
    this.order1 = this.formBuilder.group({
      name: ['', [Validators.required]],
      street: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
    });
    this.orderService.getCurrentOrder().subscribe(res => {
      this.order = res;
      console.log(this.order.address.name);
      this.order1.value.name = this.order.address.name;
      this.order1.value.street = this.order.address.street;
      this.order1.value.houseNumber = this.order.address.houseNumber;
      this.order1.value.city = this.order.address.city;
      this.order1.value.postCode = this.order.address.postCode;
    });
  }

  get p() { return this.order1.controls; }

  next(): void {
    this.orderService.updateOrder(this.order.id, this.order).subscribe( res => {

    }, error => {

    });
  }
}
