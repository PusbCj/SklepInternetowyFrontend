import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {StartComponent} from '../start/start.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ContactComponent} from '../contact/contact.component';


const routes: Routes = [
  {path : 'start', component: StartComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'contact', component: ContactComponent},
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
