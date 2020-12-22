import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModulRoutingModule } from './category-modul-routing.module';
import { CategoryModulComponent } from './category-modul.component';
import {SliderModule} from 'primeng/slider';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChipsModule} from 'primeng/chips';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [CategoryModulComponent],
  imports: [
    CommonModule,
    CategoryModulRoutingModule,
    SliderModule,
    PaginatorModule,
    MultiSelectModule,
    ChipsModule,
    CheckboxModule
  ]
})
export class CategoryModulModule { }
