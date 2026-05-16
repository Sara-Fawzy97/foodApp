import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

// https://upskilling-egypt.com:3006/api/v1/Users/?userName=diago07&email=diago2020%40elm.com&country=egypt&groups=2&pageSize=10&pageNumber=1
  getAndFilterUsers(Psize:number,pNum:number,name?:string,tagId?:number,catId?:number){
    
    let params = new HttpParams()
        .set('pageSize', Psize)
        .set('pageNumber', pNum);
  
           if (name) {
        params = params.set('name', name);
      }
      if (tagId) {
        params = params.set('tagId', tagId);
      }
  
      if (catId) {
        params = params.set('categoryId', catId);
      }
  
      return this.http.get("Users/",{params})
  }
  
  getUserByID(id:any){
    return this.http.get('Users/',id)
  }

}
