import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let eaddr = document.querySelector('#eaddr');
    let user = 'logiicode';
    let domain = 'outlook.com';
    eaddr.textContent = user + '@' + domain;
  }

}
