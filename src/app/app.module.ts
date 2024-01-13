import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { HeaderComponent } from './header/header.component';

FormGroup


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SellerSignupComponent,
    SellerHomeComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
