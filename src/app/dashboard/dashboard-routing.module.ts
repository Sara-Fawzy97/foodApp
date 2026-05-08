import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guard/admin.guard';
import { userGuard } from '../core/guard/user.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'admin',canActivate:[adminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
  { path: 'userPortal',canActivate:[userGuard], loadChildren: () => import('../user-portal/user-portal.module').then(m => m.UserPortalModule) },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
