import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName = localStorage.getItem('userName')
router= inject(Router)
userStorage=JSON.parse(localStorage.getItem("user")||'{}')
// image=this.userStorage.imagePath
imageBaseUrl = 'https://upskilling-egypt.com:3006/';


  logOut(){
    localStorage.clear()
    this.router.navigateByUrl('/auth')
  }
// picname:string=''
  initialpic(name:string){
    return  name.substring(0,2).toUpperCase()
  // ?.split('').map()
}
}
