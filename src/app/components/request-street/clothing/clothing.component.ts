import {Component, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {RequestStreetService} from "../request-street.service";
import {ToastsManager} from "ng5-toastr";

declare var $;
@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html'
})
export class ClothingComponent implements OnInit {

  quantity = 0;
  size='';
  clothes;
  @Input() clothings;

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


  addClothing(){

    let clothe = {
      "name": this.serviceStreet.getClothing().name,
      "size": this.size,
      "quantity": this.quantity,
      "gender": this.serviceStreet.getGender()
    };

    if(clothe.name=='') {
      console.log("en name")
      this.toastr.error('Falta seleccionar la prenda');
    }else if (clothe.size=='') {
      console.log("en size")
      this.toastr.error('Te falta ingresar el talle de la prenda');
    }else if (clothe.quantity==0){
      console.log("en quantity")
      this.toastr.error('Te falta ingresar la cantidad de prendas');
    }else {
      this.serviceStreet.addClothing(clothe);
      console.log("en addClothing")
      this.toastr.success('¡Se dió de alta la prenda!');
      console.log(clothe);
      //limpio las variables
      this.size=null;
      this.quantity=0;
      this.serviceStreet.setClothing(null);
      $('.collapse').collapse('hide')
    }

  }

  setClothes(clothing){
    this.serviceStreet.setClothing(clothing);
    this.clothes = this.serviceStreet.getClothe(clothing, this.serviceStreet.getGender());
  }

}
