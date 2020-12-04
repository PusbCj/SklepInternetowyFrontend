import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
product: Product;
prodID = '';

  constructor(private route: ActivatedRoute, private productService: ProductServiceService, private router: Router) {
    this.product = new Product();
  }
  ngOnInit(): void {
    this.prodID = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.prodID).subscribe(res => {
      this.product = res;
    }, res => this.router.navigate(['/pagenotfound']));
  }

  changePhoto( id: number): void {
    const temp = this.product.photoUrl[0];
    this.product.photoUrl[0] = this.product.photoUrl[id];
    this.product.photoUrl[id] = temp;
  }
}
