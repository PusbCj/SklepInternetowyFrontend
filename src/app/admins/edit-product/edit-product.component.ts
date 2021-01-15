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
  brands: string[];
  brandsSuggestion: string[];
  quantity = 1;
  images: PhotoCaru[];
  selectedFile = null;
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
    this.brands = [];
    this.brandsSuggestion = [];
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
    this.getBrands();
  }

  private getBrands(): void {
    this.categoryService.getBrands().subscribe(res => {
      this.brands = res.filter(x => x != null);
    });
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

  onFileSelected(event, x): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile.type.startsWith('image')) {
      this.productService.addFile(this.selectedFile).subscribe(res => {
        const photo = new PhotoUrl();
        photo.url = res;
        this.product.photoUrl[x] = photo;
        this.images = this.product.photoUrl.map(y => {
          const phot = new PhotoCaru();
          phot.alt = 'photo';
          phot.tittle = 'photo';
          phot.previewImageSrc = y.url;
          phot.thumbnailImageSrc = y.url;
          return phot;
        });
        this.changePhoto(x);
      }, error => {
      });
    }else{
      this.messageService.add({severity: 'error', summary: 'bład', detail: 'Plik nie jest zdjeciem'});
    }
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe( res => {
      this.messageService.add({severity: 'success', summary: 'Zaktualizowano', detail: 'Aktualizacja produktu powiodła się'});

    }, error => {
      this.messageService.add({severity: 'error', summary: 'bład', detail: 'Aktualizacja produktu nie powiodła się'});
    });
  }

  search($event: any): void {
    this.brandsSuggestion = this.brands.filter(x => x.startsWith($event.query));
  }
}
