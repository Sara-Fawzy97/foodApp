import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  deleteItem(endpoint:string,id:number){
   return this.http.delete( `${endpoint}/${id}`)
  }
}
