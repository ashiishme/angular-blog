import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var menu_btn = document.querySelector('#mobile-header span');
  	var main_header = document.querySelector('.ashish-header');
    var close_btn = document.querySelector('.menu-btn');

  	menu_btn.addEventListener('click', () => {
  		(<any>main_header).classList.add('show-mobile-menu');
  	});

    close_btn.addEventListener('click', () => {
      (<any>main_header).classList.remove('show-mobile-menu');
    });
  }

}
