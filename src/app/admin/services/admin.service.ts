import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
// baseUrl="https://u pskilling-egypt.com:3006/api/v1/"

getAllTags():Observable<any>{
  return this.http.get('tag/')
}

}
