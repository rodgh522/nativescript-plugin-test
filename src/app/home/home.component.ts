import { Component, OnInit } from '@angular/core';
import { SocialLogin } from 'nativescript-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'test';
  social = new SocialLogin();

  constructor() { }

  ngOnInit() {
    this.social.init();
  }

  login(){
    console.log('click!');
    this.social.login((a)=> {
      console.log(a);
    });
  }
}
