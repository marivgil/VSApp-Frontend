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
  hospitalProducts : any = [];
  firstEntry = true;

  constructor(private service: HospitalsService,
    private _vcr: ViewContainerRef,
    public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  async ngOnInit() {
    this.hospitalProducts = [];
    this.hospitals = await this.service.allHospitals()

  }

  async searchHospitalProduct(){
    if(!this.hospital){
      this.toastr.error('Te falto seleccionar el hospital');

    }else{
      this.firstEntry= false;
      this.hospitalProducts = await this.service.searchHospitalProduct(this.hospital.name)
    }
  }

  viewResult() {
    return this.hospitalProducts.length > 0
  }

}
