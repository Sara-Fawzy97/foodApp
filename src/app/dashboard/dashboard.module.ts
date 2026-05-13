import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
