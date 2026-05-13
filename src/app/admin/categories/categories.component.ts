import { Component, inject } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categoriesService = inject(CategoriesService);
  allTags: any[] = [];
  categories: any[] = [];
  sharedService = inject(SharedService);
  toastr = inject(ToastrService);

  categoryId!: number;
  tagId!: number;
  name!: string;
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
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
        console.log(res.data);
      },
    });
  }

  onsearchChange(event: any) {
    this.name = event.target.value;
    this.getCategories();
  }
}
