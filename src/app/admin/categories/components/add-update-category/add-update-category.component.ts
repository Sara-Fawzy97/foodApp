import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddUpdateRecipesComponent } from 'src/app/admin/recipes/components/add-update-recipes/add-update-recipes.component';
import { DialogData } from '../../categories.component';
import { CategoriesService } from '../../services/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.css']
})
export class AddUpdateCategoryComponent {
 
  
  toastr = inject(ToastrService);

    constructor(
    public dialogRef: MatDialogRef<AddUpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    
  }
  categoriesService=inject(CategoriesService)


  addNewCategory(data:string){
    // console.log(data.name)
    this.categoriesService.addNewCategory(data).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        this.toastr.error(err.error.message, 'Something wrong!!')
      },complete:()=>{
        this.toastr.success(data+" Category is added", 'Success!!')

      }
    })
  }
  
  
}
