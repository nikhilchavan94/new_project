import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserserviceService } from './services/userservice.service';


export const authGuard: CanActivateFn = (route, state) => {
  const service=inject(UserserviceService);
if(localStorage.getItem('seller'))
{
  return true;
}
  return service.issellerloggedin;
};
