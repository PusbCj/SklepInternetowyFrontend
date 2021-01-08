import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartModuleComponent } from './cart-module.component';
import { DeliveryComponent } from './delivery/delivery.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipsModule} from 'primeng/chips';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [CartModuleComponent, DeliveryComponent, SummaryComponent],
  imports: [
    CommonModule,
    CartModuleRoutingModule,
    FormsModule,
    ChipsModule,
    ReactiveFormsModule
  ]
})
export class CartModuleModule { }
