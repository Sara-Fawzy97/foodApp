import { Component, Inject, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { DialogData } from 'src/app/admin/categories/categories.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/IUser';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
constructor( 

  public dialogRef: MatDialogRef<ViewUserComponent>,  @Inject(MAT_DIALOG_DATA) public data:User,){}
userService=inject(UsersService)
baseImgURL="https://upskilling-egypt.com:3006/"

ngOnInit(){
  console.log(this.data)
}

 onNoClick(): void {
    this.dialogRef.close();
    
  }
// user:any={}
  // getOneUser(){
  //   this.userService.getUserByID(this.data.id).subscribe({
  //     next:(res)=>{
  //       this.user=res
  //       console.log(res)
  //     }
  //   })
  // }

}
