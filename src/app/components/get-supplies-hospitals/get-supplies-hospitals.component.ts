import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {HospitalsService} from "../home-hospitals/hospitals.service";
import {ToastsManager} from "ng2-toastr";
import {hospital} from "../../interfaces/hospital";

@Component({
  selector: 'app-get-supplies-hospitals',
  templateUrl: './get-supplies-hospitals.component.html'
})
export class GetSuppliesHospitalsComponent implements OnInit {

  hospital: hospital = null;
  hospitals;
  hospitalProducts;
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
    this.service.allHospitals().
    subscribe(res => {
      this.hospitals = res;
    });
  }

  searchHospitalProduct(){
    if(this.hospital.name==''){
      this.toastr.error('Te falto seleccionar el hospital');

    }else{

      this.firstEntry= false;
      this.viewResult = true;

      this.service.searchHospitalProduct(this.hospital.name).
        subscribe(res => {
       this.hospitalProducts = res;
      });
    }
  }

}
