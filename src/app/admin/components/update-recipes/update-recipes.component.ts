import { Component, inject } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recipe } from '../../models/Recipe';
import { Tag } from '../../models/Tag';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-update-recipes',
  templateUrl: './update-recipes.component.html',
  styleUrls: ['./update-recipes.component.css']
})
export class UpdateRecipesComponent {

  adminService= inject(AdminService)
  allTags:any[]=[]
  categories:any[]=[]
  router=inject(Router)
    toastr = inject(ToastrService);

    route=inject(ActivatedRoute)
  id:number = this.route.snapshot.params['id']
  
  updateRecipeForm=new FormGroup({
    // id:new FormControl(null,Validators.required),
        name:new FormControl('',Validators.required),
        description:new FormControl('',[Validators.required,Validators.min(10)]),
        price :new FormControl('',[Validators.required,Validators.min(1)]),
        tagId :new FormControl('',Validators.required),
        recipeImage:new FormControl('',[Validators.pattern(/\.(jpe?g|png|gif|webp|svg|bmp)$/),]),
  categoriesIds: new FormControl ('',Validators.required)
        
  
  })
  
  ngOnInit(){
    
    this.getOneRecipe()
    this.getTags();
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

  oneRecipe:Recipe={
    id: 0,
    name: '',
    description: '',
    price: 0,
    tag: {},
    imagePath: ''
  }
tag:Tag={
  id: 0,
  name: ''
}
oneCategory:Category={
  id: 0,
  name: ''
}

  getOneRecipe(){
      this.adminService.getOneRecipe(this.id).subscribe({
        next:(res)=>{
          this.oneRecipe=res
          this.tag=this.oneRecipe.tag as Tag
          this.oneCategory=res.category
              console.log(this.oneRecipe)
              console.log(this.tag)
              console.log(this.categories)
              
        }
})
}
 
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
  
    msgError=""

  update(data:FormGroup){
    console.log(data)
const myData= new FormData();
    Object.keys(this.updateRecipeForm.value).forEach((key)=>{
      const value= this.updateRecipeForm.get(key)?.value
  if (value) myData.append(key,value)
    })

  this.adminService.updateRecipe(this.id,myData).subscribe({
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
  
  clearForm(){
    this.updateRecipeForm.reset()
  }
}
