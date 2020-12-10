import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listproduct: Array<Product>;

  constructor(private productService: ProductServiceService) {
    this.listproduct = new Array<Product>();
  }

  ngOnInit(): void {
    this.productService.getProduct(2).subscribe(res => {
      this.listproduct.push(res);
    });
    this.productService.getProduct(1).subscribe(res => {
      this.listproduct.push(res);
    });
  }

}
