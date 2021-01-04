import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {StartComponent} from '../start/start.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ContactComponent} from '../contact/contact.component';
import {ActivateComponent} from '../activate/activate.component';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {ChangeForgotPasswordComponent} from '../change-forgot-password/change-forgot-password.component';
import {MyAccountComponent} from '../my-account/my-account.component';


const routes: Routes = [
  {path : 'start', component: StartComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'activate', component: ActivateComponent},
  {path : 'myaccount', component: MyAccountComponent},
  {path : 'forgotPassword', component: ForgotPasswordComponent},
  {path : 'changeforgottenpassword', component: ChangeForgotPasswordComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('../admins/admins.module').then(m => m.AdminsModule) },
  { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: 'category', loadChildren: () => import('../category-modul/category-modul.module').then(m => m.CategoryModulModule) },
  { path: 'cart', loadChildren: () => import('../cart-module/cart-module.module').then(m => m.CartModuleModule) },
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
