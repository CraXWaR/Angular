import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/auth.service';
import { GameService } from 'src/app/services/game.service';
import { errHandler } from 'src/app/shared/errHandler';
import { IGame } from 'src/app/shared/interfaces/gamgeInterface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged();

  }

  game: IGame | undefined;
  isAuthor: boolean = false;
  inEditMode: boolean = false;
  isWished: boolean = false;
  token: string | null = localStorage.getItem('token');
  errors: string | undefined = undefined;


  constructor(private gameService: GameService, private authService: UserService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.getGame();
  }

  getGame(): void {
    this.game = undefined;
    const id = this.activatedRoute.snapshot.params['id'];
    this.gameService.getOneGame(id).subscribe({
      next: (game) => {
        this.game = game
        if(this.userService.user?._id == game.owner._id){
          this.isAuthor = true
        }else {
          this.isAuthor = false;
        }
      },
      error: (err) => {
        console.log(err)
        this.router.navigate(['**'])
      }
    })
  }


  deleteGame() {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.gameService.deleteGame(id).subscribe({
      next: () => {
        console.log('Game deleted!');
        this.router.navigate(['/catalog']);
      },
      error: (err) => console.log(err)
    })
  }

  editGame(form: NgForm) {
    if (this.authService.user?._id != this.game?.owner._id || !this.token) {
      this.router.navigate(['**'])
    }
    const id = this.game?._id;

    let token = localStorage.getItem('token');
    let value = form.value;
    value.token = token;
    
    this.gameService.editGame(id, value).subscribe({
      next: (game) => {
        this.game = game
        this.inEditMode = false;
      },
      error: (err) => {
        this.errors = errHandler(err.error?.error);
      }
    })
  }

  wishGame() {
    console.log('wished');
    this.isWished = true
  }

  ngOnInit(): void {
  }

}
