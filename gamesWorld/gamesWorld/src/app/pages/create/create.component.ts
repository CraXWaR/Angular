import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { errHandler } from 'src/app/shared/errHandler';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errors: string | undefined = undefined;

  constructor(private gameSerivce: GameService, private router: Router) { }

  createGame(form: NgForm) {
    let token = localStorage.getItem('token');
    let value = form.value;
    value.token = token;
    
    this.gameSerivce.createGame(value).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: (err) => {
        this.errors = errHandler(err?.error?.error);
      }
    })
    console.log(value);
    
  }

  ngOnInit(): void {
  }

}