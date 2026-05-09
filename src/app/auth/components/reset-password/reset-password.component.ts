import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

    router=inject(Router)
    toastr=inject(ToastrService)
    authService=inject (AuthService)
    errorMsg=""
    emailStorage=localStorage.getItem('email')
  showPassord:boolean=false

    fb= inject(FormBuilder)

    // resetPasswordForm=this.fb.group({
    //    email: [this.emailStorage, [Validators.required, Validators.email]],
    //     password:[null, [
    //       Validators.required,
    //       Validators.pattern(
    //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //       ),
    //     ]],
    //      confirmPassword:[null, Validators.required],
    //      seed:[null,Validators.required],
    // },{validator:this.confirmedPassowrd})
  
  resetPasswordForm= new FormGroup({
        email: new FormControl(this.emailStorage, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ]),
         confirmPassword: new FormControl(null, Validators.required),
         seed:new FormControl(null,Validators.required),
  }
)

toggleShowPassword(){
this.showPassord=!this.showPassord
}


  // confirmedPassowrd(s:AbstractControl){
  //      const password=s.get('password')?.value
  //      const confirmedPassword=s.get('confirmPasssword')?.value

  //       password ===confirmedPassword? null :{passwordMismatch:true}
  // }

submitForm(data:FormGroup){
    // console.warn(data.value)

    this.authService.resetPassword(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
        this.errorMsg=err.error.message;
        this.toastr.error(this.errorMsg,'Error')
      },
      complete:()=> {
        console.log('Request Completed')
        this.toastr.success('Password reset successfully! Please login with your new password.', 'Success');
      this.router.navigateByUrl('/')
      },
    })
   
  }

}
