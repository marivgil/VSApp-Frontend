import { Component, OnInit } from '@angular/core';
import {ReceptionCentersService} from "./reception.centers.service";

@Component({
  selector: 'app-reception.centers',
  templateUrl: './reception.centers.component.html'
})

export class ReceptionCentersComponent implements OnInit {

  listRecepCenters: any = [];
  location = '';
  viewResult = false;

  constructor(private service: ReceptionCentersService) { }

  ngOnInit() {

  }

  getReceptionCenter() {
    this.service.getReceptionCenter(this.location).subscribe(res => {
      this.listRecepCenters = res.json();
    });
    this.viewResult = true;
  }

}
