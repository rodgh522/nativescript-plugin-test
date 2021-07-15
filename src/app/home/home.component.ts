import { Component, OnInit } from '@angular/core';
import { SocialLogin } from 'nativescript-google-login';
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
  }
  
  login(){
    const option = {
      clientId: '76787911109-6cmpq8uv9uqhtnbgv9s87kvlq2lkbukv.apps.googleusercontent.com',
      callback: this.loginResult
    }
    this.googleLogin.init(option);
    console.log('click!');
  }

  loginResult(user, error){
    console.log('user=> ' + user.grantedScopes, user.userID, user.openIDRealm);

    console.log('err=> ' + error);
  }
}
