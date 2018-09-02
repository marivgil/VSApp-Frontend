import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import * as auth0 from 'auth0-js';
import {BehaviorSubject} from "rxjs";

(window as any).global = window;

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);

  auth0 = new auth0.WebAuth({
    clientID: 'Ut4MiMbCZj6WlQu2nCQY5dMUXmd1rgIM',
    domain: 'vsapp.auth0.com',
    responseType: 'token id_token',
    audience: 'https://vsapp.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  login(): void {
    this.loggedIn.next(true);
    this.auth0.authorize();
    this.router.navigate(['home']);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.loggedIn.next(false);
    this.router.navigate(['login']);
  }

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

}
