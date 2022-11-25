import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  SERVER_URL = 'http://localhost:3000/auth/register';

  // form = new FormGroup({
  //   "username": new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   "email": new FormControl("", [Validators.required, appEmailValidator(appEmailDomains)]),
  //   "password": new FormControl("", [Validators.required, Validators.minLength(3)]),
  //   "repeatPassword": new FormControl([sameValueGroupValidator('password', 'repeatPassword')])
  // })

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    password: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      repeatPassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'repeatPassword')]
    })
  });

  constructor(private fb: FormBuilder, private http:HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  registerHandler() {
    console.log(this.form);
    
    // let fd = new FormData();
    // // fd.append("usernam", form.value)

    // this.http.post<any>(this.SERVER_URL, fd).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
    

    // // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    
    // // this.router.navigate([returnUrl]);
    
  }

  ngOnInit(): void {
  }

}
