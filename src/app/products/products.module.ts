import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    GalleriaModule
  ]
})
export class ProductsModule { }
