import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from './services/users.service';
import { User } from './models/IUser';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  id:string;
  userName: string;
  imagePath:string;
  email: string;
  country: string;
  group: string;
  phoneNumber:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {

  baseimgURL='https://upskilling-egypt.com:3006/'
 users:User[]=[]
  totalNumberOfRecords=916
  pageSize!:number
  pageSizeOptions=[5, 10, 25, 100]
  pageIndex=1
 pageEvent: PageEvent | undefined;
  sharedService=inject(SharedService)
        toastr = inject(ToastrService);


 
  selectedItem:any

  isModalOpen=false
  // sharedService: any;

  ismodalOpen(item:any){
  this.selectedItem=item
    this.isModalOpen=true
    console.log(this.selectedItem)
  }
   closeModal(){
    this.isModalOpen=false
  }

  deleteItem(){
  this.sharedService.deleteItem("Users",this.selectedItem.id).subscribe({
    next:(res)=>{
      console.log(res)
    },error:(err)=> {
      console.log(err)
            this.toastr.error(err.error.message, 'Error');

    },
    complete:()=>{
            this.toastr.success(this.selectedItem.userName+" is deleted successfully!", 'Success');
            this.isModalOpen=false
            this.getAllUsers()

    }
  })
}
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Role','image','phone','option'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
 showPageSizeOptions:boolean = true;
ngOnInit(){
  this.getAllUsers()
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  usersService=inject(UsersService)

getAllUsers(){
  this.usersService.getAndFilterUsers(this.pageSize,this.pageIndex).subscribe({
    next:(res:any)=>{
      this.users=res.data
      this.dataSource.data = res.data
      console.log(this.dataSource.data)
this.totalNumberOfRecords=res.totalNumberOfRecords
console.log(this.totalNumberOfRecords)
    }
  })
}

handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalNumberOfRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllUsers()
  }


//to view options (delete/view)
   @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

   selectedElement!:any

   selectItem(row:any){
    this.selectedElement=row
    console.log(this.selectedElement)
   }
   
  openDialog() {
      // this.menuTrigger.closeMenu();
    const dialogRef = this.dialog.open(ViewUserComponent, {
    
      data :{
        id:this.selectedElement.id,
        name:this.selectedElement.userName,
        imagePath:this.selectedElement.imagePath,
        country:this.selectedElement.country,
        phone:this.selectedElement.phoneNumber,
        email:this.selectedElement.email,
        group:this.selectedElement.group.name

    },restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that



    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
  
}

