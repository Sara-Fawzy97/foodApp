import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddUpdateRecipesComponent } from 'src/app/admin/recipes/components/add-update-recipes/add-update-recipes.component';
import { DialogData } from '../../categories.component';
import { CategoriesService } from '../../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from '../../models/ICategory';

@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.css'],
})
export class AddUpdateCategoryComponent {
  toastr = inject(ToastrService);

  constructor(
    public dialogRef: MatDialogRef<AddUpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICategory,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  categoriesService = inject(CategoriesService);

  baseImgURL = 'https://upskilling-egypt.com:3006/';

  ngOnInit() {
    console.log(this.data);
  }

   submit(){
        if(this.data.id){
          this.updateCategory()
          console.log(this.data)
        }
        else{
          this.addNewCategory()
        }
}

  addNewCategory() {
    let name=this.data.name
    this.categoriesService.addNewCategory(name).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Something wrong!!');
      },
      complete: () => {
        this.toastr.success(this.data.name + ' Category is added', 'Success!!');
      },
    });
  }
  id=this.data

  updateCategory() {
    // let params = {
    //   id: this.data.id,
    //   name: this.data.name,
    // };
    this.categoriesService.updateCategory(this.data.id,this.data.name).subscribe({
      next: (res) => {
        console.log(res);
      },error: (err) => {
        this.toastr.error(err.error.message, 'Something wrong!!');
      },
      complete: () => {
        this.toastr.success(this.data.name + ' Category is updated', 'Success!!');
        // this.dialogRef.close(true);
      },
      
    });
  }
}
