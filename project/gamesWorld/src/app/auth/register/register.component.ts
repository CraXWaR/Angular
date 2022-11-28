import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  SERVER_URL = 'http://localhost:3000/register';


  constructor(http:HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  registerHandler() {
    
  }

  ngOnInit(): void {
  }

}
