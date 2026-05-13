import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    // DeleteModalComponent

  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,SharedModule
  ]
})
export class CategoriesModule { }
