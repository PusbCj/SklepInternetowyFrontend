import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartModuleComponent } from './cart-module.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
  { path: '', component: CartModuleComponent },
  {path: 'delivery', component: DeliveryComponent},
  {path: 'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartModuleRoutingModule { }
