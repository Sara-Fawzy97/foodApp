import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RecipesAdminComponent } from './recipes-admin/recipes-admin.component';
import { AddNewRecipesComponent } from './add-new-recipes/add-new-recipes.component';


@NgModule({
  declarations: [
    AdminComponent,
    RecipesAdminComponent,
    AddNewRecipesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
