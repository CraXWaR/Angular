import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
    DetailsComponent,
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
