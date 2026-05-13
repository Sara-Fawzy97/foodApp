import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import { AddNewRecipesComponent } from './components/add-new-recipes/add-new-recipes.component';
// import { ɵInternalFormsSharedModule } from "@angular/forms";
// import { UpdateRecipesComponent } from './components/update-recipes/update-recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { DeleteModalComponent } from './shared/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AdminComponent,
    // DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
       ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
