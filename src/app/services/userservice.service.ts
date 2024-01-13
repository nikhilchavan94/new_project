import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signup } from '../datatypes';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  issellerloggedin = new BehaviorSubject<boolean>(false);
  showerror=new EventEmitter<boolean>(false);
  url = 'http://localhost:3000/usersdata';

  constructor(private http: HttpClient, private router: Router) {}
 
  signup_post_seller(data: signup) {
    this.http.post(this.url, data,{observe:'response'}).subscribe((result) => {
      if (result) {
        console.log(result);
        this.issellerloggedin.next(true);
        localStorage.setItem('seller', JSON.stringify(result));
        this.router.navigate(['seller_home']);
      }
    });
  }

  reloadseller() {
    if (localStorage.getItem('seller')) {
      this.issellerloggedin.next(true);
      this.router.navigate(['seller_home']);
    }
  }


  login_seller(data:login)
  {
    this.http.get(`http://localhost:3000/usersdata?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>
    {
      console.log(result);
      if(result && result.body && result.body.length)
      {
        console.log("seller logged in");
        this.router.navigate(['seller_home']);
        localStorage.setItem('seller',JSON.stringify(result.body));

      }
      else
      {
          console.log('login failed');
          this.showerror.emit(true)
      }
      
    })
  }
}