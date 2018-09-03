import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import * as auth0 from 'auth0-js';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";

(window as any).global = window;

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  auth0 = new auth0.WebAuth({
    clientID: 'Ut4MiMbCZj6WlQu2nCQY5dMUXmd1rgIM',
    domain: 'vsapp.auth0.com',
    responseType: 'token id_token',
    audience: 'https://vsapp.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile email'
  });

  constructor(public router: Router,
              private userService: UserService) {
  }

  login(): void {
    this.loggedIn.next(true);
    this.auth0.authorize();
    //this.router.navigate(['home']);
    this.router.navigate(['/']);
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.getProfile((err , res) => {
      this.userService.userProfile = res;
      localStorage.setItem('email', res.email);
    });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  getToken() {
    return localStorage.getItem("id_token")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }


  public getProfile(cb): any {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      alert("No hay token");
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {

      if (profile) {
        self.userService.userProfile = profile;
          this.userService.getUser(profile.email).subscribe( res => {

            if (res.status === 204) {
              window.alert("No estás dado de alto en el sistema...");
              this.logout();
            }
          });
      }
      cb(err, profile);
    });
  }

}
