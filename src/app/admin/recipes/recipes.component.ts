
  import { Component, inject } from '@angular/core';
  import { AdminRoutingModule } from '../admin-routing.module';
  // import { AdminService } from '../services/admin.service';
import { RecipeServiceService } from './services/recipe-service.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
 
  adminService= inject(RecipeServiceService)
  allTags:any[]=[]
  recipes:any[]=[]
  categories:any[]=[]
    sharedService=inject(SharedService)
        toastr = inject(ToastrService);
  
  
  selectedItem:any

  isModalOpen=false
  // sharedService: any;

  ismodalOpen(item:any){
  this.selectedItem=item
    this.isModalOpen=true
    console.log(this.selectedItem)
  }
  

  closeModal(){
    this.isModalOpen=false
  }

  deleteItem(){
  this.sharedService.deleteItem("Recipe/",this.selectedItem.id).subscribe({
    next:(res)=>{
      console.log(res)
    },error:(err)=> {
      console.log(err)
    },
    complete:()=>{
            this.toastr.success('"The Recipe is deleted!"', 'Success');
            this.isModalOpen=false
            this.getRecipes()

    }
  })
}
  ngOnInit():void{
    this.getTags()
    this.getRecipes()
  this.getCategories()
  }
  
  
  getTags(){
    this.adminService.getAllTags().subscribe({
    next:(res:any)=>{
  console.log(res)
  this.allTags=res
      // this.allTags=res.map((item: { name: any; })=>item.name)
      // console.log(this.allTags)
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
      this.tagId=event.target.value
      this.getRecipes()
    }
  
    onCategoryChange(event:any){
      this.categoryId=event.target.value
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

  view:boolean=false

  modalViewed(){
    this.view=true
  }
  }
  

