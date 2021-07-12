import { Component, OnInit } from '@angular/core';
import { SocialLogin } from 'nativescript-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'test';

  constructor() { }

  ngOnInit() {
  }

  login(){
    const sl = new SocialLogin();
    sl.init();
    console.log('click!');
    console.log(sl.greet());
  }
}
