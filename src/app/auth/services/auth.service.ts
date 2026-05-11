import { Injectable } from '@angular/core';
import { LoginData } from '../models/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
// baseUrl="https://u pskilling-egypt.com:3006/api/v1/"

//to get user Info from token (decoded Token)
  getProfile(){
    const  token:any =localStorage.getItem('token')
    const decoded:any = jwtDecode(token);
    console.log(decoded)
    localStorage.setItem('role',decoded.userGroup)
    localStorage.setItem('userName',decoded.userName)
  }


  login(data:LoginData):Observable<any>{
    return this.http.post('users/login',data)

  }

  register(data:FormData):Observable<any>{
    return this.http.post('users/register',data);
  }

  resetPasswordRequest(data:LoginData):Observable<any>{
     return this.http.post('Users/Reset/Request',data)
  }
  resetPassword(data:LoginData):Observable<any>{
    return this.http.post('Users/Reset',data)
  }

   verifyAccount(data:LoginData):Observable<any>{
    return this.http.put('Users/verify',data)
  }
  // https://upskilling-egypt.com:3006/api/v1/Users/currentUser
  getCurrentUser(){
    return this.http.get('Users/currentUser')
  }
}
