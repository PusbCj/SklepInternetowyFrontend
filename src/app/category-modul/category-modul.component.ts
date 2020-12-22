import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ProductServiceService} from '../services/product-service.service';
import {CategoryService} from '../services/category.service';
import {Product} from '../models/Product.model';
import {filter} from 'rxjs/operators';
import {PrimeNGConfig} from 'primeng/api';
import {ProductCategoryAge} from '../models/ProductCategoryAge';

interface Brand {
  name: string;
}

@Component({
  selector: 'app-category-modul',
  templateUrl: './category-modul.component.html',
  styleUrls: ['./category-modul.component.css']
})

export class CategoryModulComponent implements OnInit {

  sortPro = 'price,asc';
  age = '';
  pageSize = 10;
  pageNumber = 0;
  rangeValues: number[] = [0, 500];
  brand = '';
  totalElements = 0;
  titleCategory = '';
  catID = '';
  listProduct: Array<Product>;
  listBrand: Array<Brand>;
  selectedBrand: Array<Brand>;
  listAge: Array<ProductCategoryAge>;
  selectedAge: Array<ProductCategoryAge>;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
              private router: Router, private categoryService: CategoryService,
              private primengConfig: PrimeNGConfig ) {
    this.listProduct = new Array<Product>();
    this.listBrand = new Array<Brand>();
    this.selectedBrand = new Array<Brand>();
    this.listAge = new Array<ProductCategoryAge>();
    this.selectedAge = new Array<ProductCategoryAge>();
  }
  ngOnInit(): void {
    this.init();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
       this.init();
      });
  }

  init(): void{
    this.catID = this.route.snapshot.paramMap.get('id');
    this.getAllProducts();
    this.getCategory();
    this.getBrandList();
    this.primengConfig.ripple = true;
    this.getAgeList();
  }

  getCategory(): void{

    this.categoryService.getById(Number(this.catID)).subscribe(res => {
      this.titleCategory = res.name;
    }, error => {
      this.titleCategory = '';
    });
  }

  getAllProducts(): void {
    this.brand = this.selectedBrand.map(bran => '&brands=' + bran.name).join('');
    this.age = this.selectedAge.map( age => '&ages=' + age.id).join('');
    this.productService.getAllProductsByParameters(this.catID, this.age,
      this.sortPro, this.pageNumber, this.pageSize, this.rangeValues[1], this.rangeValues[0], this.brand)
      .subscribe(res => {
        this.listProduct = res.content;
        this.totalElements = res.totalElements;
      }, error => {}) ;
  }

  getBrandList(): void{
    this.categoryService.getCategoryBrand(this.catID).subscribe(res => {
      this.listBrand = res.filter(x => x != null).map(x => {
        const y: Brand = {name: x};
        return y;
      });
    });
  }
  getAgeList(): void{
    this.productService.getAllAgeCategories().subscribe( res => {
      this.listAge = res.sort((a, b) => a.id - b.id);
    });
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
