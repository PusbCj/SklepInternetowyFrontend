import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {StartComponent} from '../start/start.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ContactComponent} from '../contact/contact.component';
import {ActivateComponent} from '../activate/activate.component';
import {CategoryComponent} from '../category/category.component';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';


const routes: Routes = [
  {path : 'start', component: StartComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'activate', component: ActivateComponent},
  {path : 'category', component: CategoryComponent},
  {path : 'forgotPassword', component: ForgotPasswordComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full' },
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
