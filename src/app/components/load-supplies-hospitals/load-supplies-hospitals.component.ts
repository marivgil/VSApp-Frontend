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
  hospitals;
  prodType = '';
  productsType = ['Insumo', 'Existencia'];
  nameProduct = '';
  quantityProd = 0;
  rc;
  viewResult = false;

  hospitalProducts;
  firstEntry = false;

  constructor(private service: HospitalsService, private router: Router,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.service.allHospitals().
    subscribe(res => {
      this.hospitals = res;
    });
  }

  addProduct(){
    if(this.hospital=='' || this.prodType==''||this.nameProduct=='' || this.quantityProd<=0 || this.quantityProd==null){
      this.toastr.error('Faltan completar datos para dar de alta el producto');
    }else{
      let product = {
        "hospital": this.hospital,
        "type": this.prodType,
        "name": this.nameProduct,
        "quantity": this.quantityProd
      };
      this.service.addProduct(product).subscribe();
      this.toastr.success('El producto fue dado de alta');
    }
    this.firstEntry = true;
    this.nameProduct = '';
    this.quantityProd = 0;

    let date = new Date();
    let month:number = date.getMonth()+1; // WTF????

    this.service.getProductsHospitalByDay(
      date.getFullYear()+""+month+""+date.getDate()).
    subscribe(res => {
      this.hospitalProducts = res;
    });

  }

}
