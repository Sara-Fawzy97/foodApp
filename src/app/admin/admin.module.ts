import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { SharedModule } from '../shared/shared.module';
// import { DeleteModalComponent } from '../shared/components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
       ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
