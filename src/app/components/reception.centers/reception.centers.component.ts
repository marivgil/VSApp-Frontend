import { Component, OnInit } from '@angular/core';
import {ReceptionCentersService} from "./reception.centers.service";

//declare var $;


@Component({
  selector: 'app-reception.centers',
  templateUrl: './reception.centers.component.html'
})

export class ReceptionCentersComponent implements OnInit {

  listRecepCenters = [];
  location = '';

  constructor(private service: ReceptionCentersService) { }

  ngOnInit() {

  }

  getReceptionCenter() {
    this.service.getReceptionCenter(this.location).subscribe(res => {
      this.listRecepCenters = res.json();
      if(this.listRecepCenters.length===0){
      //  $('#modalNoCenters').modal('hide');
      }
      console.log(this.listRecepCenters);
    });
  }

}
