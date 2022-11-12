import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesListComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
