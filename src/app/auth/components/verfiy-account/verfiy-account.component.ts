import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-verfiy-account',
  templateUrl: './verfiy-account.component.html',
  styleUrls: ['./verfiy-account.component.css']
})
export class VerfiyAccountComponent {


verifyAccountForm=new FormGroup({
  email:new FormControl(null,[Validators.required, Validators.email]),
  code:new FormControl(null,Validators.required)
})
toastr=inject(ToastrService)
authService=inject(AuthService)
submitFom(data:FormGroup){
  console.log(data.value)

  this.authService.verifyAccount(data.value).subscribe({
    next:(res)=>{
      console.log(res);      
} ,error:(err)=>{
  console.log(err)
      this.toastr.error('err.error.message')
},
  complete:()=> {
  
      this.toastr.success('Account verified successfully')

}, })

}

}
