import { Component, inject } from '@angular/core';
// import { AdminRoutingModule } from '../admin-routing.module';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-recipes-admin',
  templateUrl: './recipes-admin.component.html',
  styleUrls: ['./recipes-admin.component.css'],
})
export class RecipesAdminComponent {

adminService= inject(AdminService)
allTags:any[]=[]
recipes:[]=[]

ngOnInit():void{
  this.getTags()

}


getTags(){
  this.adminService.getAllTags().subscribe({
  next:(res:any)=>{
console.log(res)
    this.allTags=res.map((item: { name: any; })=>item.name)
    console.log(this.allTags)
  }
 })
}

}
