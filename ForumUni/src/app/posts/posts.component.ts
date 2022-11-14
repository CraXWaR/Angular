import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadLastFivePosts(5).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => console.error(e) 
    });
  }

}
