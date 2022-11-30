import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: UserService, private formBuilder: FormBuilder) { }

  signUpForm!: FormGroup;
  errorMessage = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.signUpForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      rePassword: new FormControl(null,  [Validators.required, Validators.minLength(5)]),
    })
  }

  onRegister(){
    console.log(this.signUpForm.controls)
    const {username, email, password, rePassword} = this.signUpForm.value;
    
    if(password !== rePassword){
      this.errorMessage = 'Passwords Don\'t Match';
      return;
    }
    this._auth.registerUser(this.signUpForm.value)
  }

}
