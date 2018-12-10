import {Component, Input, OnInit} from '@angular/core';
import {RequestStreetService} from "../request-street.service";
import {ToastrService} from "ngx-toastr";

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
    private toastr: ToastrService
  ) {
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

  addQuantityTable(clothe){
    clothe.quantity ++
  }

  subQuantityTable(clothe){
    if (clothe.quantity > 0)
      clothe.quantity --;
  }


  addClothing(){

    let clothe = {
      "name": this.serviceStreet.getClothing().name,
      "size": this.size,
      "quantity": this.quantity,
      "gender": this.serviceStreet.getGender()
    };

    if(clothe.name=='') {
      this.toastr.error('Falta seleccionar la prenda');
    }else if (clothe.size=='') {
      this.toastr.error('Te falta ingresar el talle de la prenda');
    }else if (clothe.quantity==0){
      this.toastr.error('Te falta ingresar la cantidad de prendas');
    }else {
      this.serviceStreet.addClothing(clothe);
      //this.serviceStreet.closedRequest();


      this.serviceStreet.closedRequest().subscribe(res => {
        return res;
      });



      this.toastr.success('¡Se dió de alta la prenda!');
      //limpio las variables
      this.size='';
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
