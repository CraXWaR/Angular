import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  SERVER_URL = 'http://localhost:3000/login';

  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  loginHandler(data: any){
    this.http.get(this.SERVER_URL, data)
      .subscribe((result) => {
        console.warn('result', result);
        
      })

    // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    
    // this.router.navigate([returnUrl]);
  }

  ngOnInit(): void {
  }

}