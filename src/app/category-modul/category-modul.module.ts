import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModulRoutingModule } from './category-modul-routing.module';
import { CategoryModulComponent } from './category-modul.component';
import {SliderModule} from 'primeng/slider';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [CategoryModulComponent],
  imports: [
    CommonModule,
    CategoryModulRoutingModule,
    SliderModule,
    PaginatorModule,
    MultiSelectModule
  ]
})
export class CategoryModulModule { }
