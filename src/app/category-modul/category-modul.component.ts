import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ProductServiceService} from '../services/product-service.service';
import {CategoryService} from '../services/category.service';
import {Product} from '../models/Product.model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-category-modul',
  templateUrl: './category-modul.component.html',
  styleUrls: ['./category-modul.component.css']
})
export class CategoryModulComponent implements OnInit {

  sortPro = 'price,asc';
  age = null;
  pageSize = 10;
  pageNumber = 0;
  rangeValues: number[] = [0, 500];
  brand = '';
  totalElements = 0;
  titleCategory = '';
  catID = '';
  listProduct: Array<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
              private router: Router, private categoryService: CategoryService) {
    this.listProduct = new Array<Product>();
  }
  ngOnInit(): void {
    this.catID = this.route.snapshot.paramMap.get('id');
    this.getAllProducts();
    this.getCategory();



    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.catID = this.route.snapshot.paramMap.get('id');
        this.getCategory();
        this.getAllProducts();
      });
  }

  getCategory(): void{

    this.categoryService.getById(Number(this.catID)).subscribe(res =>{
      this.titleCategory = res.name;
    }, error => {
      this.titleCategory = '';
    });
  }

  getAllProducts(): void {
    const age2 = this.age === null ? 100 : this.age;
    this.productService.getAllProductsByParameters(this.catID, age2,
      this.sortPro, this.pageNumber, this.pageSize, this.rangeValues[1], this.rangeValues[0], this.brand)
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

  changeSelect(): void {
    this.getAllProducts();
  }
}