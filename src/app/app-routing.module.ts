import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
{component:HomepageComponent, path:'',},
{component:SellerSignupComponent, path:'seller_signup'},
{component:SellerHomeComponent,path:'seller_home',canActivate:[authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
