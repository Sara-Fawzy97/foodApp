import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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


submitFom(data:FormGroup){
  console.log(data.value)
}

}
