import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Roles } from 'src/app/roles';

export const userGuard: CanActivateFn = (route, state) => {
  
  const router=inject(Router);
  
    const role=Roles.SystemUser
     if(localStorage.getItem('role')===role){
      // router.navigateByUrl('/dashboard/userPortal')
      return true;
    }else {
  
      router.navigateByUrl('/dashboard');
      return false;}
};
