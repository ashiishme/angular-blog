import { Component, OnInit } from '@angular/core';
import { BlogApiService } from './../blog-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts:any;

  constructor(private api: BlogApiService) { }

  ngOnInit() {
  	this.api.get_posts().subscribe((res:any) => {
      this.posts = res;
  	}, (error) => {
      console.log(error);
  	});
  }

}
