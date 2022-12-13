import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup   } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/shared/interfaces/gamgeInterface';
let id = ''

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  game: IGame | null = null;
  id: string = ''

  editForm: FormGroup = this.formBuilder.group({
    'title': new FormControl(''),
    'genre': new FormControl(''),
    'price': new FormControl(''),
    'imageUrl': new FormControl(''),
    'description': new FormControl(''),
  })

  constructor(private gameService: GameService, private formBuilder: FormBuilder, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.gameService.getOneGame(this.id).subscribe({
      next: (game) => {
        this.game = game
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  // editHandler(): void {
  //   const { title, genre, price, imageUrl, description } = this.editForm.value
  //   const body = { title, genre, price, imageUrl, description };
  //   console.log(body);

  //   this.gameService.editGame(body, this.id).subscribe({
  //     next: (game) => {
  //       if (!game) {
  //         return
  //       }
  //       this.router.navigate([`games/${this.id}`])
  //       console.log(game);
        
  //     },
  //     error: (err) => {
  //       console.log(err);
        
  //     }
  //   })
  // }

}
