import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    GalleriaModule,
    QuillModule.forRoot()
  ]
})
export class ProductsModule { }
