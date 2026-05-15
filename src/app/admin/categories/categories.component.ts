import { Component, inject } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from './services/categories.service';
import { AddUpdateCategoryComponent } from './components/add-update-category/add-update-category.component';
import { MatDialog } from '@angular/material/dialog';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUpdateCategoryComponent, {
      data: {name: this.name},
        panelClass:'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
    
      this.getCategories()
    });
  }

}


