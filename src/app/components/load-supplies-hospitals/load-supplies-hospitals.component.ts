import { Component, OnInit } from '@angular/core';
import {HospitalsService} from "../home-hospitals/hospitals.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-load-supplies-hospitals',
  templateUrl: './load-supplies-hospitals.component.html'
})
export class LoadSuppliesHospitalsComponent implements OnInit {

  hospital='';
  hospitals = ['Durand', 'Posadas', 'Santojanni', 'Rivadavia'];
  prodType='';
  productsType = ['Insumo', 'Existencia'];
  nameProduct;
  quantityProd;
  rc;

  constructor(private service: HospitalsService, private router: Router) { }

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
    window.alert("EL producto fue dado de alta");
    this.router.navigate(['home']);
  }

}
