import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {HospitalsService} from "../home-hospitals/hospitals.service";
import {Router} from "@angular/router";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-load-supplies-hospitals',
  templateUrl: './load-supplies-hospitals.component.html'
})
export class LoadSuppliesHospitalsComponent implements OnInit {

  hospital = '';
  hospitals = ['Durand', 'Posadas', 'Santojanni', 'Rivadavia'];
  prodType = '';
  productsType = ['Insumo', 'Existencia'];
  nameProduct;
  quantityProd;
  rc;

  constructor(private service: HospitalsService, private router: Router,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
  }

  addProduct(){
    let product = {
      "hospital": this.hospital,
      "type": this.prodType,
      "name": this.nameProduct,
      "quantity": this.quantityProd
    };
    this.service.addProduct(product).subscribe();
    this.toastr.success('El producto fue dado de alta');
  }

}
