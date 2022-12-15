import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/auth.service';
import { IGame } from 'src/app/shared/interfaces/gamgeInterface';
import { IUser } from 'src/app/shared/interfaces/userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser | undefined;
  games: IGame[] | any = null;
  isEmpty: boolean = false;
  inEditMode: boolean = false;

  constructor(private userService: UserService) {
    this.getUserProfile();
    // this.getMyGames();
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

  // getMyGames() {
  //   let token = localStorage.getItem('token');
    
  //   this.userService.getProfileGames({ token }).subscribe({
  //     next: (value) => {
  //       this.games = value
  //       if (value.length == 0) {
  //         this.isEmpty = true;
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);

  //     }
  //   })
  // }

  ngOnInit(): void {
  }

}
