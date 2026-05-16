import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/admin/users/services/users.service';
import { IRecipe } from '../../models/IRecipe';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {
constructor( 

  public dialogRef: MatDialogRef<ViewRecipeComponent>,  @Inject(MAT_DIALOG_DATA) public data:IRecipe,){}
userService=inject(UsersService)
baseImgURL="https://upskilling-egypt.com:3006/"

ngOnInit(){
  console.log(this.data)
}

 onNoClick(): void {
    this.dialogRef.close();
    
  }
}
