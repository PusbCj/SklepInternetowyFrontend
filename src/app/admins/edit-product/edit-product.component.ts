import { Component, OnInit } from '@angular/core';
import {PhotoCaru} from '../../models/PhotoCaru.models';
import {Product} from '../../models/Product.model';
import {PhotoUrl} from '../../models/PhotoUrl.models';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../services/product-service.service';
import {Location} from '@angular/common';
import {CartServiceService} from '../../services/cart-service.service';
import {MessageService} from 'primeng/api';
import {ItemShopCart} from '../../models/ItemShopCar.model';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/Category.model';
import {ProductCategoryAge} from '../../models/ProductCategoryAge';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  quantity = 1;
  images: PhotoCaru[];
  product: Product;
  prodID = '';
  productUrlBig: PhotoUrl;
  displayBasic = false;
  activeIndex = 0;
  activeId = 0;
  categoryList: Array<Category> = new Array<Category>();
  listAge: Array<ProductCategoryAge>;


  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];



  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
              private router: Router, private location: Location, private cartService: CartServiceService,
              private messageService: MessageService, private categoryService: CategoryService ) {
    this.product = new Product();
  }

  ngOnInit(): void {

    this.prodID = this.route.snapshot.paramMap.get('id');
    this.getAllCat();
    this.getAgeList();
    this.productService.getProduct(this.prodID).subscribe(res => {
      this.product = res;
      this.productUrlBig = res.photoUrl[0];
      this.images = res.photoUrl.map(x => {
        const phot = new PhotoCaru();
        phot.alt = 'photo';
        phot.tittle = 'photo';
        phot.previewImageSrc = x.url;
        phot.thumbnailImageSrc = x.url;
        return phot;
      });
    }, res => this.router.navigate(['/pagenotfound']));
  }
  getAllCat(): void {
    this.categoryService.getAllCategory().subscribe( res => {
      this.categoryList = res;
    });
  }

  changePhoto(id: number): void {
    this.productUrlBig = this.product.photoUrl[id];
    this.activeIndex = id;
    this.activeId = id;
  }

  undo(): void {
    this.location.back();
  }

  setActiveId(): void {
    this.activeIndex = this.activeId;
    this.displayBasic = true;
  }

  minusQuantity(): void {
    this.quantity = this.quantity - 1;
    if (this.quantity < 1) {
      this.quantity = 1;
    }
  }

  addToCart(): void {
  }

  getAgeList(): void{
    this.productService.getAllAgeCategories().subscribe( res => {
      this.listAge = res.sort((a, b) => a.id - b.id);
    });
  }
}
