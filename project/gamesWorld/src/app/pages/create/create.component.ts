import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errors: string | undefined = undefined;

  constructor(private gameSerivce: GameService, private router: Router) { }

  createGame(form: NgForm) {
    this.gameSerivce.createGame(form.value).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: (err) => {
        this.errors = err.error.error
      }
    })
    console.log(form.value);
    
  }

  ngOnInit(): void {
  }

}