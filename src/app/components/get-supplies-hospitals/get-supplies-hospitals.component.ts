import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {HospitalsService} from "../home-hospitals/hospitals.service";
import {ToastsManager} from "ng2-toastr";

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

  constructor(private service: HospitalsService,
  private _vcr: ViewContainerRef,
  public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.hospitalProducts = [];
    this.service.allNameHospitals().
    subscribe(res => {
      this.hospitals = res;
    });
  }

  searchHospitalProduct(){
    if(this.hospital==''){
      this.toastr.error('Te falto seleccionar el hospital');
    }else{
      this.firstEntry= false;
      this.viewResult = true;

      this.service.searchHospitalProduct(this.hospital).
        subscribe(res => {
       this.hospitalProducts = res;
      });
    }
  }

}
