import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  posts_url:string = "https://www.ashiish.me/ashiish-api/wp-json/wp/v2/posts?_embed";
  single_post_url:string = "https://www.ashiish.me/ashiish-api/wp-json/wp/v2/posts?slug=";

  constructor(private http: HttpClient) { }

  get_posts() {
  	return this.http.get(this.posts_url);
  }

  single_post(slug) {
  	let headers = new HttpHeaders();
  	headers.append('Content-Type', 'application/json; charset=UTF-8');
  	return this.http.get(this.single_post_url + slug.param);
  }

}
