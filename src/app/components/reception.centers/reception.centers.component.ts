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

  async getReceptionCenter() {
    this.listRecepCenters = await this.service.getReceptionCenter(this.location);
    this.viewResult = true;
  }

}
