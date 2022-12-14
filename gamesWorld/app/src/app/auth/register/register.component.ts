import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errHandler } from 'src/app/shared/errHandler';
import { emailValidator, passwordValidator } from 'src/app/shared/validators/validators';

import { UserService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  errors: string | undefined = undefined;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, emailValidator]],
      fullName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      userInfo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10000)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      rePassword: ['', [Validators.required, passwordValidator]]
    });
  }

  onRegister() {
    this.userService.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errors = errHandler(err.error?.error);
      }
    })
  }

  ngOnInit(): void {
  }

}
