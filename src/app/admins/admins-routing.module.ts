import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsComponent } from './admins.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AddproductComponent} from './addproduct/addproduct.component';

const routes: Routes = [{ path: '', component: AdminsComponent },
  { path: 'editproduct/:id', component: EditProductComponent },
  { path: 'addproduct', component: AddproductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
