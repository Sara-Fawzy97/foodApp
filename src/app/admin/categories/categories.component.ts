import { Component, inject, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from './services/categories.service';
import { AddUpdateCategoryComponent } from './components/add-update-category/add-update-category.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { tick } from '@angular/core/testing';
import { IRecipe } from '../recipes/models/IRecipe';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  p: number = 1; //page number
  pageSize: number = 10;
  categoriesNumbers: number = 0;

  categoriesService = inject(CategoriesService);
  allTags: any[] = [];
  categories: any[] = [];
  sharedService = inject(SharedService);
  toastr = inject(ToastrService);

  categoryId!: number;
  tagId!: number;
  searchedName!: string;
  imageBaseUrl = 'https://upskilling-egypt.com:3006/';

 

  selectedItem: any;
  isModalOpen = false;
  ismodalOpen(item: any) {
    this.selectedItem = item;
    this.isModalOpen = true;
    console.log(this.selectedItem);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  deleteItem() {
    this.sharedService.deleteItem('Category/', this.selectedItem.id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.toastr.success('"The Recipe is deleted!"', 'Success');
        this.isModalOpen = false;
        this.getCategories();
      },
    });
  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAllCategories(this.pageSize,this.p,this.searchedName).subscribe({
      next: (res) => {
        this.categories = res.data;
        console.log(res.data);
        this.categoriesNumbers = res.totalNumberOfRecords;
      },
    });
  }

  onsearchChange(event: any) {
    this.searchedName = event.target.value;
    this.getCategories();
  }

  //pagination
  changePage(page: any) {
    this.p = page;
    this.getCategories();
  }


  
  name: string='';

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddUpdateCategoryComponent, {
      data: {name: this.name},
        panelClass:'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
    
      this.getCategories()
    });
  }

 @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  
    // constructor(public dialog: MatDialog) {}
  
recipes:IRecipe[]=[]

  openViewDialog(item:any) {
  // this.selectedItem=item
   this.getOneRecipe(item.id)
      // this.menuTrigger.closeMenu();
   
    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    // dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  getOneRecipe(id:any){
    this.categoriesService.getRecipeByID(id).subscribe({
      next:(res:any)=>{
        console.log(res.recipe)
        // this.selectedItem.recipe=res.recipe
        // // this.recipes=res.recipe
        // console.log(this.selectedItem.recipe)

         const dialogRef = this.dialog.open(ViewCategoryComponent, {
  width: '600px',
    
      data :{
        id:res.id,
        name:res.name,
        recipe:res.recipe
      

    },restoreFocus: false});

      }
    })
  }

  
  openUpdateDialog(item:any){
   
  const dialogRef = this.dialog.open(AddUpdateCategoryComponent, {
      data: {id:item.id, name:item.name},
        panelClass:'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {

  if(result){

    this.getCategories();

  }
      // this.getCategories()
    });
}

}

