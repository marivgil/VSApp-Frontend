import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
  }

  login(){
    this.authService.login();
  }

}
