import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
   
  sharedService=inject(SharedService)
      toastr = inject(ToastrService);
  
  @Input() isOpen:boolean=false;
@Input() item:any;

@Output() close =new EventEmitter();
@Output() delete =new EventEmitter();


  onClose() {
    this.close.emit();
  }
onDelete(){
  this.delete.emit();
}

// deleteItem(){
//   this.sharedService.deleteItem("Recipe/",this.item.id).subscribe({
//     next:(res)=>{
//       console.log(res)
//     },error:(err)=> {
//       console.log(err)
//     },
//     complete:()=>{
//             this.toastr.success('"The Recipe is deleted!"', 'Success');

//     }
//   })
// }



}
