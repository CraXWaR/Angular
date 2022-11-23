import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';




@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CreateComponent,
  ]
})
export class PagesModule { }