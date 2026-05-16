import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { AddUpdateRecipesComponent } from './components/add-update-recipes/add-update-recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddUpdateRecipesComponent,
    ViewRecipeComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxDropzoneModule,
    NgxPaginationModule
  ]
})
export class RecipesModule { }
