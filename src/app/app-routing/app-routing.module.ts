import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {StartComponent} from '../start/start.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ContactComponent} from '../contact/contact.component';
import {ActivateComponent} from '../activate/activate.component';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {AddProductComponent} from '../add-product/add-product.component';
import {CartComponent} from '../cart/cart.component';
import {MyAccountComponent} from '../my-account/my-account.component';


const routes: Routes = [
  {path : 'start', component: StartComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'activate', component: ActivateComponent},
  {path : 'cart', component: CartComponent},
  {path : 'myaccount', component: MyAccountComponent},
  {path : 'addproduct', component: AddProductComponent},
  {path : 'forgotPassword', component: ForgotPasswordComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('../admins/admins.module').then(m => m.AdminsModule) },
  { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: 'category', loadChildren: () => import('../category-modul/category-modul.module').then(m => m.CategoryModulModule) },
  {path: '**', component: PageNotFoundComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
