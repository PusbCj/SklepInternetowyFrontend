import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../models/Product.model';
import {Location} from '@angular/common';
import {PhotoUrl} from '../models/PhotoUrl.models';
import {PhotoCaru} from '../models/PhotoCaru.models';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  images: PhotoCaru[];
product: Product;
prodID = '';
productUrlBig: PhotoUrl;
  displayBasic = true;
  activeIndex = 0;
  activeId = 0;


  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
              private router: Router, private location: Location) {
    this.product = new Product();
  }
  ngOnInit(): void {

    this.prodID = this.route.snapshot.paramMap.get('id');
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

  changePhoto( id: number): void {
    this.productUrlBig = this.product.photoUrl[id];
    this.activeIndex = id;
    this.activeId = id;
  }
  undo(): void{
    this.location.back();
  }

  setActiveId(): void {
    this.activeIndex = this.activeId;
  }
}
