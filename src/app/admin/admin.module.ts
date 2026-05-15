import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
       ReactiveFormsModule,
      //  MatButtonModule
    
  ]
})
export class AdminModule { }
