import { Component, inject } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-recipes',
  templateUrl: './add-new-recipes.component.html',
  styleUrls: ['./add-new-recipes.component.css'],

 
 
})
export class AddNewRecipesComponent {
adminService= inject(AdminService)
allTags:any[]=[]
categories:any[]=[]
router=inject(Router)
  toastr = inject(ToastrService);
    msgError=""


addnewRecipeForm=new FormGroup({
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

addnew(data:FormGroup){
  console.log(data.value)

  const myData= new FormData();
  Object.keys(this.addnewRecipeForm.value).forEach((key)=>{
    const value= this.addnewRecipeForm.get(key)?.value
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

clearForm(){
  this.addnewRecipeForm.reset()
}
}
