import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [DeleteModalComponent],
  imports: [
    CommonModule,
    MatDialogModule, 
     MatButtonModule,
      MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatIconModule,
      MatTableModule, MatPaginatorModule,
       MatMenuModule
  ],exports:[
    DeleteModalComponent, MatDialogModule, 
     MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatIconModule,
     MatTableModule, MatPaginatorModule,MatMenuModule
    ]
})
export class SharedModule { }
