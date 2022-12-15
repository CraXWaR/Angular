import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser | undefined;
  inEditMode: boolean = false;

  constructor(private userService: UserService) {
    this.getUserProfile();
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

  editUserProfile() {
    console.log('editing');
    
  }

  ngOnInit(): void {
  }

}
