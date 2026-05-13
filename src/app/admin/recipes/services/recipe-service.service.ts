import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http:HttpClient) { }
// baseUrl="https://u pskilling-egypt.com:3006/api/v1/"

getAllTags():Observable<any>{
  return this.http.get('tag/')
}
// https://upskilling-egypt.com:3006/api/v1/Recipe/?tagId=2&categoryId=2&pageSize=1&pageNumber=10
getAndFilterRecipes(Psize:number,pNum:number,name?:string,tagId?:number,catId?:number){
  
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

    return this.http.get("Recipe/",{params})
}


getAllCategories():Observable<any>{
  return this.http.get('Category/?pageSize=5&pageNumber=2')
}


addNewRecipes(data:any):Observable<any>{
return this.http.post('Recipe/',data)
}

getOneRecipe(id:number):Observable<any>{
  return this.http.get('Recipe/'+id)
}

updateRecipe(id:number,data:any){
  return this.http.put('Recipe/'+id,data)

}

getImage(imagePath:string){
return this.http.get(imagePath,{responseType:'arraybuffer'}).pipe(
        map(e=>{
          return new File([e], imagePath);

        })
        )
      ;
}

}
