import { Component, OnInit } from '@angular/core';
import { SocialLogin } from 'nativescript-google-login';
import { isIOS } from '@nativescript/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'test';
  googleLogin = new SocialLogin();

  constructor() { }

  ngOnInit() {
    if(isIOS){
      this.googleLogin.init();
    }
  }

  login(){
    console.log('click!');
    this.googleLogin.login((a)=> {
      console.log(a);
    });
  }
}
