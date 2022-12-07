import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/shared/interfaces/gamgeInterface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  games: IGame[] | undefined;
  constructor(private gameService: GameService) {
    this.getAllGames();
   }
 
   getAllGames(){
    this.games = undefined;
    this.gameService.getAllGames().subscribe((games) => this.games = games)
   }

  ngOnInit(): void {
  }

}
