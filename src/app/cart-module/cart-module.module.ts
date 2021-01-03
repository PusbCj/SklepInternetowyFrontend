import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartModuleComponent } from './cart-module.component';
import { DeliveryComponent } from './delivery/delivery.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CartModuleComponent, DeliveryComponent],
  imports: [
    CommonModule,
    CartModuleRoutingModule,
    FormsModule
  ]
})
export class CartModuleModule { }
