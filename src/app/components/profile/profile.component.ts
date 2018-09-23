import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  perfil;
  perfiles = ['ADMIN', 'USER'];
  area;
  areas = ['ECOLOGÍA', 'HOSPITALES', 'VILLA', 'CALLE', 'DIFUSIÓN', 'PRENSA'];

  constructor() { }

  ngOnInit() {
  }

}
