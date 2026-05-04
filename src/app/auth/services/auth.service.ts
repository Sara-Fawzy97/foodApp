import { Injectable } from '@angular/core';
import { LoginData } from '../models/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
// baseUrl="https://u pskilling-egypt.com:3006/api/v1/"

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
}
