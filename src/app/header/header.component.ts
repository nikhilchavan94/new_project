import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType:string='default'; 
  constructor(private router:Router,private service:UserserviceService)
  {
     
  }
  
  
  ngOnInit():void{
  
    this.router.events.subscribe((val:any)=>{
      if(val.url)
      {
        
      if(localStorage.getItem('seller') && (val.url.includes('seller')))
      {
        console.log('seller in');
        this.menuType='seller';
      }
      else
      {
        console.log('seller out');
        this.menuType='default';
      }
      }
     })
    
  }
  
  logout()
  {
    localStorage.removeItem('seller');
    this.router.navigate(['']);
  }
  
}
