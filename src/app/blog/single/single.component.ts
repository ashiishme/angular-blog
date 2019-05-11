import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BlogApiService } from './../../blog-api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  url:any = {"param":""};
  single:any;

  constructor(private api: BlogApiService, private route: Router,
  	private ActivatedRoute: ActivatedRoute) { 

  	this.ActivatedRoute.paramMap.subscribe(params => {
  		this.url.param = params.get('postname');
  	});

  }

  ngOnInit() {
  	this.api.single_post(this.url).subscribe((res:any) => {
  		if(res) {
  			this.single = res;
  		}
  	});
  }

}
