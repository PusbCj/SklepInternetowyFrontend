import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {FormsModule} from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';
import {EditorModule} from 'primeng/editor';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [AdminsComponent, EditProductComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    GalleriaModule,
    EditorModule,
    RadioButtonModule,
    MultiSelectModule
  ]
})
export class AdminsModule { }
