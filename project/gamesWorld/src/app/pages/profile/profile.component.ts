import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private userService: UserService) { 
    this.currentUser = userService.user
  }

  ngOnInit(): void {
  }

}
