import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

const API_URL = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  createGame(data: {}) {
    return this.http.post(`${API_URL}/games`, data);

  }
}
