import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Roles } from 'src/app/roles';

export const adminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);

  //SuperAdmin //SystemUser
  const role=Roles.SuperAdmin
   if(localStorage.getItem('role')===role){
    // router.navigateByUrl('/dashboard/admin')
    return true;
  }else {

    router.navigate(['/dashboard']);
    return false;}
};
