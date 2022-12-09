import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/auth.service';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/shared/interfaces/gamgeInterface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  game: IGame | undefined;
  // token: string | null = localStorage.getItem('token')
  // isAuthor: boolean = false;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    // this.getGame();
  }

  // getGame(): void {
  //   this.game = undefined;
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   this.gameService.getOneGame(id).subscribe({
  //     next: (game) => {
  //       this.game = game
  //       if(this.userService.user?._id == game.owner._id){
  //         this.isAuthor = true
  //       }else {
  //         this.isAuthor = false;
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err)
  //       this.router.navigate(['**'])
  //     }
  //   })
  // }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.gameService.getOneGame(id).subscribe({
      next: (game) => {
        console.log(game);
        this.game = game;
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

}
