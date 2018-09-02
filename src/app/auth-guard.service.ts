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
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
      return this.authService.isLoggedIn
        .pipe(
          take(1),
          map((isLoggedIn: boolean) => {
            if (!isLoggedIn){
              window.alert("Tenes que estár logueado para acceder a la info solicitada.");
              return false;
            }
            return true;
          }));

    }


}
