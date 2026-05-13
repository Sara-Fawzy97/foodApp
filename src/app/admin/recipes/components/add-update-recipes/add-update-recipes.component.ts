import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from '../../services/recipe-service.service';
import { ToastrService } from 'ngx-toastr';
// import { Recipe } from '../../models/Recipe';
// import { Tag } from '../../models/Tag';
// import { Category } from '../../models/Category';

@Component({
  selector: 'app-add-update-recipes',
  templateUrl: './add-update-recipes.component.html',
  styleUrls: ['./add-update-recipes.component.css']
})
export class AddUpdateRecipesComponent {

  adminService= inject(RecipeServiceService)
  allTags:any[]=[]
  categories:any[]=[]
  router=inject(Router)
    toastr = inject(ToastrService);
      msgError=""
    route=inject(ActivatedRoute)

  recipeId:number = 0
  
  
  RecipeForm=new FormGroup({
        name:new FormControl(null,Validators.required),
        description:new FormControl(null,[Validators.required,Validators.min(10)]),
        price :new FormControl(null,[Validators.required,Validators.min(1)]),
        tagId :new FormControl(null,Validators.required),
        recipeImage:new FormControl(null,[Validators.pattern(/\.(jpe?g|png|gif|webp|svg|bmp)$/),]),
  categoriesIds: new FormControl (null,Validators.required)
        
  
  })
  
  ngOnInit(){
    
    this.getTags();
    this.getCategories()
  this.recipeId= this.route.snapshot.params['id']

    if(this.recipeId) this.getOneRecipe()

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
  
  
  //"unAuthorized"
  getCategories(){
    this.adminService.getAllCategories().subscribe({
      next:(res)=>{
        this.categories=res.data
        console.log(res.data)
      }
    })
  }
  
   file: any;
    handleUploading(event: any) {
      this.file = event.target.files[0];
      if (this.file) {
        const maxSize = 2 * 1024 * 1024;
  
        if (this.file.size > maxSize) {
          // this.toastr.warning('File is too large! Maximum size is 2MB.', 'Error');
  
        }
      }
    }
  
  addnew(){

    const myData= new FormData();
    Object.keys(this.RecipeForm.value).forEach((key)=>{
      const value= this.RecipeForm.get(key)?.value
  if (value) myData.append(key,value)
    })
  
    this.adminService.addNewRecipes(myData).subscribe({
      next:(res)=>{
        console.log(res)
      }, error:(err)=>{
        this.msgError=err.error.message
        console.log(err)
  
      },
      complete:()=>{
        this.toastr.success('"The Recipe created successfully!"', 'Success');
          this.router.navigateByUrl('/dashboard/admin/recipes')
      }
    })
  }
  
  resetForm(){
    this.RecipeForm.reset()
  }

  oneRecipe:any
  getOneRecipe(){
      this.adminService.getOneRecipe(this.recipeId).subscribe({
        next:(res)=>{
          this.oneRecipe=res

          // this.tag=this.oneRecipe.tag 
          // this.oneCategory=res.category
              console.log(this.oneRecipe)
              // console.log(this.tag)
              // console.log(this.categories)
              
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=> {
          this.RecipeForm.patchValue({
          name:this.oneRecipe.name,
          description:this.oneRecipe.description,
          price:this.oneRecipe.price,
          tagId:this.oneRecipe.tag.id,
          recipeImage:this.oneRecipe.recipeImage,
          categoriesIds:this.oneRecipe.category[0].id
          })
        },
})
}

onSubmit(){
  if(this.recipeId){
    this.update()
  }else this.addnew()
}
  update(){
const myData= new FormData();
    Object.keys(this.RecipeForm.value).forEach((key)=>{
      const value= this.RecipeForm.get(key)?.value
  if (value) myData.append(key,value)
    })

  this.adminService.updateRecipe(this.recipeId,myData).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
      // this.msgError=err.error.message
    },
    complete:()=>{
      this.msgError=""
            this.toastr.success('"The Recipe is updated successfully!"', 'Success');
          this.router.navigateByUrl('/dashboard/admin/recipes')
    }
  })
  
  }


  
}
