import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {RequestStreetService} from "../request-street.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html'
})
export class ClothingComponent implements OnInit {

  quantity = 0;
  gender='';
  size='';

  constructor(
    private serviceStreet: RequestStreetService,
    private _vcr: ViewContainerRef,
    public toastr: ToastsManager
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  async ngOnInit() {
  }


  addQuantity(){
    this.quantity ++;
  }

  subQuantity(){
    if (this.quantity > 0)
      this.quantity --;
  }

  setWomanGender(){
    this.gender = 'MUJER';
  }

  setManGender(){
    this.gender = 'HOMBRE';
  }

  addClothing(){

    let clothe = {
      "name": this.serviceStreet.getClothing().name,
      "size": this.size,
      "quantity": this.quantity,
      "gender": this.gender
    };

    if(clothe.name=='') {
      console.log("en name")
      this.toastr.error('Falta seleccionar la prenda');
    }else if (clothe.gender=='') {
      console.log("en gender")
      this.toastr.error('Te falta seleccionar si es para Hombre o mujer');
    }else if (clothe.size=='') {
      console.log("en size")
      this.toastr.error('Te falta ingresar el talle de la prenda');
    }else if (clothe.quantity==0){
      console.log("en quantity")
      this.toastr.error('Te falta ingresar la cantidad de prensas');
    }else {
      this.serviceStreet.addClothing(clothe);
      console.log("en addClothing")
      this.toastr.success('¡Se dió de alta la prenda!');

      //limpio las variables
      this.size=null;
      this.quantity=0;
      this.gender=null;
      this.serviceStreet.setClothing(null);
      //FIXME cerra acordeon
    }

  }
}
