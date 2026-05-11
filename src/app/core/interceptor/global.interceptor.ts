import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
baseUrl="https://upskilling-egypt.com:3006/api/v1/"
 
constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
let auth=localStorage.getItem('token')

    const modifiedReq=request.clone({
      url:`${this.baseUrl}${request.url}`,
       setHeaders:{
        Authorization:`Bearer ${auth}`
      }
    })
    
    return next.handle(modifiedReq);
  }
}
