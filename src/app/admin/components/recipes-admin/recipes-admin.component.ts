import { Component, inject } from '@angular/core';
// import { AdminRoutingModule } from '../admin-routing.module';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-recipes-admin',
  templateUrl: './recipes-admin.component.html',
  styleUrls: ['./recipes-admin.component.css'],
})
export class RecipesAdminComponent {

adminService= inject(AdminService)
allTags:any[]=[]
recipes:any[]=[]
categories:any[]=[]


ngOnInit():void{
  this.getTags()
  this.getRecipes()
this.getCategories()
}


getTags(){
  this.adminService.getAllTags().subscribe({
  next:(res:any)=>{
console.log(res)
// this.allTags=res
    this.allTags=res.map((item: { name: any; })=>item.name)
    console.log(this.allTags)
  }
 })
}

// getCategories(){
//   this.adminService.getAllCategories().subscribe({
//     next:(res:any)=>{
//        console.log(res)
//     }
//   })
// }
 getCategories(){
    this.adminService.getAllCategories().subscribe({
      next:(res)=>{
        this.categories=res.data
        console.log(res.data)
      }
    })
  }


categoryId!: number;
tagId!: number;
name!:string;
imageBaseUrl = 'https://upskilling-egypt.com:3006/';

  onTagChange(event:any){
    this.categoryId=event.target.value
    this.getRecipes()
  }

  onCategoryChange(event:any){
    this.tagId=event.target.value
    this.getRecipes()


  }
  onsearchChange(event:any){
    this.name=event.target.value
    this.getRecipes()


  }

  recipeCat=[]
getRecipes(){
  this.adminService.getAndFilterRecipes(this.name,this.tagId,this.categoryId).subscribe({
    next:(res:any)=>{
      this.recipes=res.data
    //  this.categories=res.data.categories
    // this.recipeCat=this.recipes.category
      console.log(this.recipes)

    }
  })
}
}
