import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateComponent } from './activate/activate.component';
import { CategoryComponent } from './category/category.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {PaginatorModule} from 'primeng/paginator';
import {SliderModule} from 'primeng/slider';
import { MyAccountComponent } from './my-account/my-account.component';
import { CartComponent } from './cart/cart.component';
import {Galleria, GalleriaContent, GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent,
    PageNotFoundComponent,
    FooterComponent,
    ContactComponent,
    ActivateComponent,
    CategoryComponent,
    ForgotPasswordComponent,
    AddProductComponent,
    ProductViewComponent,
    MyAccountComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PaginatorModule,
    SliderModule,
    GalleriaModule
  ],
  providers: [MessageService,
    { provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
