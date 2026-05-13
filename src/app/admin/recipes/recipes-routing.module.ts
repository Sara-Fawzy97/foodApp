import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AddUpdateRecipesComponent } from './components/add-update-recipes/add-update-recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'add-recipe', component: AddUpdateRecipesComponent },
  { path: 'update/:id', component: AddUpdateRecipesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
