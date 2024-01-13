import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';
import { signup } from '../datatypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css'],
})
export class SellerSignupComponent {
  loggedin = false;
  constructor(private service: UserserviceService,private router:Router) {}
  signupform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  displayerror:string | undefined;

  ngOnInit():void{
    this.service.reloadseller();
  }
  signsubmit(data:any) {
    this.service.signup_post_seller(data);
    // console.log(data);
    this.router.navigate(['seller_home'])
  }

  logingo() {
    this.loggedin = !this.loggedin;
  }

  // login seller

  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loginsubmit(data: any) {
    this.service.login_seller(data);
    this.service.showerror.subscribe(error=>
    {
      console.log(error);
      this.displayerror="email or password invalid";
    })
  }

  signupgo() {
    this.loggedin =!this.loggedin;
  }
}