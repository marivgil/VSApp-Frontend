import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  constructor(public auth: AuthService,
              public router: Router) {
  }

  ngOnInit() {
  }

  login(){
    this.auth.login();
    this.router.navigate(['/']);
  }


}
