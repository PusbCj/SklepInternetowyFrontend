import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Product} from '../models/Product.model';
import {ProductServiceService} from '../services/product-service.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  desc = false;
  age = null;
  pageSize = 10;
  pageNumber = 0;
  rangeValues: number[] = [0, 500];
  brand = '';
  totalElements = 0;
  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
              private router: Router) {
    this.listProduct = new Array<Product>();
  }
  catID = '';
  listProduct: Array<Product>;

  ngOnInit(): void {
    this.catID = this.route.snapshot.paramMap.get('id');
    this.getAllProducts();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.catID = this.route.snapshot.paramMap.get('id');
        this.getAllProducts();
      });
  }

  private getAllProducts(): void {
    const age2 = this.age === null ? 100 : this.age;
    this.productService.getAllProductsByParameters(this.catID, age2,
      this.desc, this.pageNumber, this.pageSize, this.rangeValues[1], this.rangeValues[0], this.brand)
      .subscribe(res => {
        this.listProduct = res.content;
        this.totalElements = res.totalElements;
      }, error => {}) ;
  }

  paginate($event: any): void {
    this.pageSize = $event.rows;
    this.pageNumber = $event.page;
    this.getAllProducts();
  }

  cleanFilters(): void {
    this.brand = '';
    this.age = null;
    this.rangeValues = [];
    this.rangeValues[0] = 0;
    this.rangeValues[1] = 500;
  }
}
