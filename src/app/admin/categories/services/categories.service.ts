import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getAllCategories(pSize:number,pnum:number,name?:string):Observable<any>{
    // return this.http.get('Category/?'+'name='+name+'&pageSize='+pSize+'&pageNumber='+pnum)
   let params = new HttpParams()
    .set('pageSize', pSize)
      .set('pageNumber', pnum);

      if(name){
        params=params.set('name',name)
      }
    
    return this.http.get('Category/?',{params})
  }

addNewCategory(data:string){
   return this.http.post('Category/',{  name:data})
}

}
