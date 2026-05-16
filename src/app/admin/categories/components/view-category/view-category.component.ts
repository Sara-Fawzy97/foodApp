import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/admin/users/services/users.service';
import { ICategory } from '../../models/ICategory';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent {
constructor( 

  public dialogRef: MatDialogRef<ViewCategoryComponent>,  @Inject(MAT_DIALOG_DATA) public data:ICategory,){}
userService=inject(UsersService)
baseImgURL="https://upskilling-egypt.com:3006/"

ngOnInit(){
  console.log(this.data)
}

 onNoClick(): void {
    this.dialogRef.close();
    
  }
}
