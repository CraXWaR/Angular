import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser, User } from '../interfaces/userInterface';
import { Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userToken!: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated: boolean = false;
  private userId!: string | null;

  private _registerUrl = 'http://localhost:3000/users/register';
  private loginUrl = 'http://localhost:3000/users/login';
  private userUrl = 'http://localhost:3000/users/profile'
  
  constructor(
    private http: HttpClient,
    private route: Router,
   
  ) {}
 

 getUser(){
  return this.http.get<IUser>(this.userUrl)
 }

 getToken() {
  return this.userToken;
}

  registerUser(user: User) {
    return this.http.post<IUser>(this._registerUrl, user).subscribe({
      next: (res) => {
        this.setUser(res);
      },
    });
  }

  loginUser(data: { email: string; password: string }) {
    this.http.post<IUser>(this.loginUrl, data).subscribe({
      next: (res) => {
        this.setUser(res);
      },
    });
  }

  getIsLoggedIn() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  private setUser(res: IUser) {
    const token = res.token;
    this.userToken = token;
    if (token) {
      this.userId = res.userData.id;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.setUserData(token, this.userId);

      this.route.navigate(['/']);
    }
  }

  logout() {
    this.userToken = '';
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = '';
    this.clearUserData();
    this.route.navigate(['/']);
  }

  autoLogin() {
    const userData = this.getUserData();
    if (!userData) {
      return;
    }

    if (userData.token) {
      this.userToken = userData.token;
      this.userId = userData.userId;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }
  }

  private clearUserData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  private setUserData(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  private getUserData() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    return { token, userId: userId };
  }
}