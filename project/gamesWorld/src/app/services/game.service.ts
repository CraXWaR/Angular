import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { IGame } from '../shared/interfaces/gamgeInterface';

const API_URL = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  createGame(data: {}) {
    return this.http.post(`${API_URL}/games`, data);

  }

  getAllGames(){
    return this.http.get<IGame[]>(`${API_URL}/games`);

  }
}
