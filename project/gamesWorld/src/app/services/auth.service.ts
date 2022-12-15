import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGame } from '../shared/interfaces/gamgeInterface';
import { IUser } from '../shared/interfaces/userInterface';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class UserService implements OnDestroy {

  user: null | IUser | undefined ;

  constructor(private http: HttpClient, private router: Router) { }

  register(data: {}) {
    return this.http.post<IUser>(`${API_URL}/register`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    );
  };

  login(data: {}){
    return this.http.post<IUser>(`${API_URL}/login`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    );
  };

  logout() {
    this.user = null;
    return localStorage.removeItem('token');
  }

  isLogged() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getProfile(token: {}) {
    return this.http.post<IUser>(`${API_URL}/profile`, token);
  }

  // getProfileGames(token: {}) {
  //   return this.http.get<IGame[]>(`${API_URL}/games/mygames`, token);
  // }

  ngOnDestroy(): void {
  }

}