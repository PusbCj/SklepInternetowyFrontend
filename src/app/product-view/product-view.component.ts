import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../models/Product.model';
import {Location} from '@angular/common';
import {PhotoUrl} from '../models/PhotoUrl.models';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
product: Product;
prodID = '';
productUrlBig: PhotoUrl;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
              private router: Router, private location: Location) {
    this.product = new Product();
  }
  ngOnInit(): void {

    this.prodID = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.prodID).subscribe(res => {
      this.product = res;
      this.productUrlBig = res.photoUrl[0];
    }, res => this.router.navigate(['/pagenotfound']));
  }

  changePhoto( id: number): void {
    this.productUrlBig = this.product.photoUrl[id];
  }

  undo(): void{
    this.location.back();
  }
}
