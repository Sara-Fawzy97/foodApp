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


  logOut(){
    localStorage.clear()
    this.router.navigateByUrl('/auth')
  }
}
