import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'auth/login', 
  component: LoginComponent, 
  data: {
    title: 'Login Page'
  }  },
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
