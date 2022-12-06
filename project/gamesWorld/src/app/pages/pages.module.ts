import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CreateComponent,
  ]
})
export class PagesModule { }
