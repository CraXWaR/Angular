import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../../shared/interfaces/userInterface';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})

export class UserService implements OnDestroy {

  user: null | IUser = null;

  constructor(private http: HttpClient, private router: Router) { }

  register(data: {}){
    return this.http.post<IUser>(`${API_URL}/register`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }

  ngOnDestroy(): void {
  }

}