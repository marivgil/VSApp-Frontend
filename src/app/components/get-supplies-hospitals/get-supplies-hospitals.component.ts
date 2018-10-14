import { Component, OnInit } from '@angular/core';
import {HospitalsService} from "../home-hospitals/hospitals.service";

@Component({
  selector: 'app-get-supplies-hospitals',
  templateUrl: './get-supplies-hospitals.component.html'
})
export class GetSuppliesHospitalsComponent implements OnInit {

  hospital='';
  hospitals;
  hospitalProducts;
  hp;
  firstEntry = true;
  rc;
  viewResult = false;

  constructor(private service: HospitalsService) { }

  ngOnInit() {
    this.hospitalProducts = [];
    this.service.allNameHospitals().
    subscribe(res => {
      this.hospitals = res;
    });
  }

  searchHospitalProduct(){
    this.firstEntry= false;
    this.viewResult = true;

    this.service.searchHospitalProduct(this.hospital).
      subscribe(res => {
     this.hospitalProducts = res;
    });
  }

}
