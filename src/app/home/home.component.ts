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
  option = {
    clientId: '76787911109-6cmpq8uv9uqhtnbgv9s87kvlq2lkbukv.apps.googleusercontent.com',
    callback: this.loginResult
  }
  constructor() { }

  ngOnInit() {
    this.googleLogin.init(this.option);
    console.log(this.option);
  }
  
  login(){
    this.googleLogin.login(this.loginResult);
    console.log('click!');
  }

  loginResult(user, error){
    if(user){
      console.log('user=> ' + user.grantedScopes, user.userID, user.profile.email);
    }
    console.log('err=> ' + error);
  }

  logout(){
    this.googleLogin.logout();
    console.log('logout!');
    
  }
}
