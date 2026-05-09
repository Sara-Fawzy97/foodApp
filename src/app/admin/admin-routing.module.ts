import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RecipesAdminComponent } from './recipes-admin/recipes-admin.component';
import { AddNewRecipesComponent } from './add-new-recipes/add-new-recipes.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  { path: 'recipes', component: RecipesAdminComponent },
  { path: 'add-new-recipe', component: AddNewRecipesComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
