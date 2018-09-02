import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {


  auth0 = new auth0.WebAuth({
    clientID: 'Ut4MiMbCZj6WlQu2nCQY5dMUXmd1rgIM',
    domain: 'vsapp.auth0.com',
    responseType: 'token id_token',
    audience: 'https://vsapp.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
    this.router.navigate(['home']);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public isLoggedIn(){

  }

}
