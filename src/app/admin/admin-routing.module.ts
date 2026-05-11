import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RecipesAdminComponent } from './components/recipes-admin/recipes-admin.component';
import { AddNewRecipesComponent } from './components/add-new-recipes/add-new-recipes.component';
import { UpdateRecipesComponent } from './components/update-recipes/update-recipes.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  { path: 'recipes', component: RecipesAdminComponent },
  { path: 'add-new-recipe', component: AddNewRecipesComponent },
  { path: 'update-recipe/:id', component: UpdateRecipesComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
