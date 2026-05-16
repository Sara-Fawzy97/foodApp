import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUpdateCategoryComponent } from './components/add-update-category/add-update-category.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
// import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddUpdateCategoryComponent,
    ViewCategoryComponent,
    // DeleteModalComponent

  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class CategoriesModule { }
