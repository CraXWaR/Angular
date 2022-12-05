import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  onLogout() {
    this.userService.logout();
    this.router.navigate(['/'])
    console.log('I\'m out');
    
  }

  ngOnInit(): void {
  }

}
