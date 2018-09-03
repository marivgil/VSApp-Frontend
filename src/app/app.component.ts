import { Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app Vida Solidaria Argentina';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
