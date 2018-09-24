import { Component, OnInit } from '@angular/core';
import {HospitalsService} from "../home-hospitals/hospitals.service";
import {map} from "rxjs/operator/map";

@Component({
  selector: 'app-get-supplies-hospitals',
  templateUrl: './get-supplies-hospitals.component.html'
})
export class GetSuppliesHospitalsComponent implements OnInit {

  hospital;
  hospitals = ['Durand', 'Posadas', 'Santojanni', 'Rivadavia'];
  hospitalProducts = null;
  hp;
  firstEntry = true;
  rc;

  constructor(private service: HospitalsService) { }

  ngOnInit() {
    this.hospitalProducts = [];
  }

  searchHospitalProduct(){
    this.firstEntry= false;
    this.hospitalProducts = this.service.searchHospitalProduct(this.hospital).
      subscribe(res => {
     this.hospitalProducts = res.toString();
    });
    console.log(this.hospitalProducts)
  }

}
