import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/auth.service';
import { errHandler } from 'src/app/shared/errHandler';
import { IUser } from 'src/app/shared/interfaces/userInterface';
import { emailValidator } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form!: FormGroup;
  user: IUser | undefined;
  inEditMode: boolean = false;
  errors: string | undefined = undefined;

  constructor(private userService: UserService, private fb: FormBuilder,) {
    this.getUserProfile();

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, emailValidator]],
      fullName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      userInfo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10000)]]
    });
  }

  getUserProfile() {
    let token = localStorage.getItem('token');

    this.userService.getProfile({ token }).subscribe({
      next: (user) => {
        this.user = user
      },
      error: (err) => {
        console.log(err);

      }
    });
  }

  onEditUser() {

    const id = this.user?._id;

    let token = localStorage.getItem('token');
    let value = this.form.value;
    value.token = token;

    this.userService.editUser(id, value).subscribe({
      next: (user) => {
        this.user = user;
        this.inEditMode = false;
      },
      error: (err) => {
        this.errors = errHandler(err.error?.error);
      }
    })

  }

  ngOnInit(): void {
  }

}
