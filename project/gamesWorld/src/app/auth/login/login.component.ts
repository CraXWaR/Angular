import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { errHandler } from 'src/app/shared/errHandler';
import { UserService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  errors: string | undefined = undefined;

  onLogin(form: NgForm) {
    this.userService.login(form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errors = errHandler(err.error?.error);
      }
    })
  }

  ngOnInit(): void {
  }

}