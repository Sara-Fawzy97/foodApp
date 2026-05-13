import { Component } from '@angular/core';
import { Roles } from '../../../roles';

interface Menu {
  title:string;
  icon: string;
  navLink:string;
  isActive:boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {

is_User():boolean{
  return localStorage.getItem('role')===Roles.SystemUser?true:false
}

is_Admin():boolean{
  return localStorage.getItem('role')===Roles.SuperAdmin?true:false
}

list:Menu[]=[
  {title:'Home',
    icon:'fa-solid fa-house fa-lg',
    navLink:'/dashboard/home',
    isActive:true,
  },
   {title:'Users',
    icon:'fa-solid fa-user-group fa-lg',
    navLink:'/dashboard/auth', /*to be changed*/
    isActive:this.is_Admin(),
  },
   {title:'Recipes',
    icon:'fa-solid fa-border-all fa-lg',
    navLink:'/dashboard/admin/recipes', /*to be changed*/
    isActive:this.is_Admin(),
  },
   {title:'Recipes',
    icon:'fa-solid fa-border-all fa-lg',
    navLink:'/auth/', /*to be changed*/
    isActive:this.is_User(),
  },
   {title:'Categories',
    icon:'fa-regular fa-calendar fa-lg',
    navLink:'/dashboard/admin/categories',
    isActive:this.is_Admin(),
  },
   {title:'Change Password',
    icon:'fa-solid fa-unlock fa-lg',
    navLink:'/auth/', /*to be changed*/
    isActive:this.is_Admin(),
  },
   {title:'Favorites',
    icon:'fa-regular fa-heart fa-lg',
    navLink:'/dashboard/admin', /*to be changed*/
    isActive:this.is_User(),
  },
  //  {title:'Logout',
  //   icon:'fa-solid fa-right-from-bracket fa-lg',
  //   navLink:'/dashboard/admin', /*to be changed*/
  //   isActive:true,
  // }
]

logOut(){
  localStorage.clear()
}


}
