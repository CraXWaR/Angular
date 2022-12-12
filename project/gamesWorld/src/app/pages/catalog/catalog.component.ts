import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/shared/interfaces/gamgeInterface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  gamesList: IGame[] | null = [];
  hasGames: boolean = false;

  constructor(private gameService: GameService) {
    this.getAllGames();
   }
 
   getAllGames(){
    this.gameService.getAllGames().subscribe({
      next: (games) => {
        this.gamesList = games
        if (this.gamesList.length > 0) {
          this.hasGames = true;
        }
      },
      error: (err) => {
        console.log(err);
        
      }
    })

   }

  ngOnInit(): void {
  }

}
