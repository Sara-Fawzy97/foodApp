import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { AddUpdateRecipesComponent } from './components/add-update-recipes/add-update-recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from '../../shared/components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddUpdateRecipesComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule { }
