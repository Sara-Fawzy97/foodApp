import { Component, inject } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginData } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  authService= inject (AuthService)
  toastr=inject(ToastrService)
  router=inject(Router)

forgotPasswordForm= new FormGroup({
  email:new FormControl(null,[Validators.required, Validators.email])
})


submit(data:FormGroup){
 console.log(this.forgotPasswordForm.value)

 this.authService.resetPasswordRequest(data.value).subscribe({
  next:(res)=>{
          console.log(res);
        },
    error:(err)=>{
      console.log(err);
      this.toastr.error(err.error.message, "Error");
    }
    ,complete:()=> {
      console.log('Request completed');
    this.toastr.success("Password reset request sent successfully! Please check your email for further instructions.", "Success");
      this.router.navigateByUrl('/auth/reset-password')

    },
})

}

}
