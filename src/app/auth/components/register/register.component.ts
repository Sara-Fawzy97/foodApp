import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorMsg: string = '';

  toastr = inject(ToastrService);
  authService = inject(AuthService);

  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.{1,8}$)[A-Za-z]+[0-9]+$/),
    ]),
    country: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{11}$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    confirmPassword: new FormControl(null, Validators.required),
    profileImage: new FormControl(null, [
      Validators.required,
      Validators.pattern(/\.(jpe?g|png|gif|webp|svg|bmp)$/),
    ]),
  });

  file: any;
  handleUploading(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const maxSize = 2 * 1024 * 1024;

      if (this.file.size > maxSize) {
        this.toastr.warning('File is too large! Maximum size is 2MB.', 'Error');

      }
    }
  }

  onSubmit(data: FormGroup) {
    console.log(data.value);
    console.log(this.file);
    const myData = new FormData();

    myData.append('userName', data.value.userName);
    myData.append('country', data.value.country);
    myData.append('email', data.value.email);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);
    myData.append('profileImage', this.file);

    this.authService.register(myData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error');
      },
      complete: () => {
        this.toastr.success('You are registered successfully!', 'Welcome');
      },
    });
  }
}
