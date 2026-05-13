import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  getAllCategories(pSize:number,pnum:number):Observable<any>{
    return this.http.get('Category/?pageSize='+pSize+'&pageNumber='+pnum)
  }
  
}
