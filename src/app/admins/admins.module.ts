import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import {AdminsComponent} from './admins.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {FormsModule} from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';
import {EditorModule} from 'primeng/editor';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {QuillModule} from 'ngx-quill';
import {AddproductComponent} from './addproduct/addproduct.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {UsersComponent} from './users/users.component';
import {OrdersComponent} from './orders/orders.component';


@NgModule({
  declarations: [AdminsComponent, EditProductComponent, AddproductComponent, UsersComponent, OrdersComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    GalleriaModule,
    EditorModule,
    RadioButtonModule,
    MultiSelectModule,
    QuillModule.forRoot(),
    AutoCompleteModule
  ]
})
export class AdminsModule { }
