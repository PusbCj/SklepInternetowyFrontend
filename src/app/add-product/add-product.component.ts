import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../models/Product.model';
import {CategoryService} from '../services/category.service';
import {Category} from '../models/Category.model';
import {MessageService} from 'primeng/api';
import {PhotoUrl} from '../models/PhotoUrl.models';
import {CartServiceService} from '../services/cart-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedFile = null;
  pathFile = '';
  pathFiles: Array<PhotoUrl> = new Array();
  product: Product;
  categories: Array<Category>;
  idCategory = 1;

  constructor(private productService: ProductServiceService, private categoryService: CategoryService
              // tslint:disable-next-line:align
    , private messageService: MessageService) {
    this.product = new Product();
    this.categories = new Array<Category>();
    this.pathFiles = new Array();
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
    });
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile.type.startsWith('image')) {
      this.productService.addFile(this.selectedFile).subscribe(res => {
        this.pathFile = res;
        const photo = new PhotoUrl();
        photo.url = res;
        this.pathFiles.push(photo);
      }, error => {
      });
    }else{
      this.messageService.add({severity: 'error', summary: 'bład', detail: 'Plik nie jest zdjeciem'});
    }
  }

  saveProduct(): void {
    this.product.photoUrl = this.pathFiles;

    // tslint:disable-next-line:triple-equals
    this.product.category = this.categories.find(x => x.id == this.idCategory);
    this.productService.addProduct(this.product).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Sukces', detail: 'Podano produkt'});
      this.product = new Product();
      this.pathFiles = new Array<PhotoUrl>();
    }, error => {
      this.messageService.add({severity: 'error', summary: 'bład', detail: 'Nie udało się dodać błedu'});
    });
  }


}
