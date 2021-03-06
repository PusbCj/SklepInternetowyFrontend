import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LocationStrategy, PathLocationStrategy, registerLocaleData} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateComponent } from './activate/activate.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangeForgotPasswordComponent } from './change-forgot-password/change-forgot-password.component';
import { MyAccountComponent } from './my-account/my-account.component';
import localPl from '@angular/common/locales/pl';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ChipsModule} from 'primeng/chips';
import {OrdersComponent} from './orders/orders.component';

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
    ForgotPasswordComponent,
    ChangeForgotPasswordComponent,
    MyAccountComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    ToastModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ChipsModule
  ],
  providers: [MessageService,
    {      provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},
    { provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: LOCALE_ID, useValue: "pl"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localPl, "pl");
