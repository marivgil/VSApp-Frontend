import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private authService : AuthService,
    private router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if(this.authService.isAuthenticated()){
      return true;
    }
    else {
      this.authService.login();
      return false;
    }
  }


}
