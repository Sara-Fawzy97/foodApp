import { Component, inject } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
 
  errorMsg:string=''

  toastr=inject(ToastrService)
 authService=inject(AuthService)

loginForm = new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
})


  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

onSubmit(data:FormGroup){

this.authService.login(data.value).subscribe({
  next:(res) => {
    console.log(res);
 
  },
  error:(err)=>{
    this.errorMsg=err.error.message
    console.log(this.errorMsg);
    this.toastr.error(this.errorMsg, 'Error');
  },
  complete:()=>{
    this.errorMsg=""
    this.toastr.success('You are logged in successfully!', 'Welcome Back');

  }
})

}

}
