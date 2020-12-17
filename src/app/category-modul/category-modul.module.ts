import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModulRoutingModule } from './category-modul-routing.module';
import { CategoryModulComponent } from './category-modul.component';
import {SliderModule} from 'primeng/slider';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [CategoryModulComponent],
  imports: [
    CommonModule,
    CategoryModulRoutingModule,
    SliderModule,
    PaginatorModule
  ]
})
export class CategoryModulModule { }
