import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @ViewChild(
    // 'form',
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;

  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private authServie: AuthService) { }

  loginHandler(form: NgForm): void {
    if (form.invalid) { return; }
    this.authServie.user = {
      username: 'John',
      email: '',
      password: ''
    } as any;


    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    
    this.router.navigate([returnUrl]);
  }

  ngOnInit(): void {
  }

}