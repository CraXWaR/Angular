import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
