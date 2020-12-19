import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartModuleComponent } from './cart-module.component';
import { DeliveryComponent } from './delivery/delivery.component';



@NgModule({
  declarations: [CartModuleComponent, DeliveryComponent],
  imports: [
    CommonModule,
    CartModuleRoutingModule
  ]
})
export class CartModuleModule { }
