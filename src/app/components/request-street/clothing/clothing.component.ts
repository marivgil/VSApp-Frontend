import { Component, OnInit } from '@angular/core';
import {RequestStreetService} from "../request-street.service";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html'
})
export class ClothingComponent implements OnInit {

  quantity = 0;
  sizes;
  gender;
  size;

  constructor(
    private serviceStreet: RequestStreetService
  ) { }

  async ngOnInit() {
    //this.sizes = await this.serviceStreet.getAllSizeClothings();
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

  setSize(size){
    this.size = size;
  }

  addClothing(){

    //FIXME agregar validaciones

    let clothe = {
      "name": this.serviceStreet.getClothing(),
      "size": this.size,
      "quantity": this.quantity,
      "gender": this.gender
    };

    this.serviceStreet.addClothing(clothe);

    //limpio las variables
    this.size=null;
    this.quantity=0;
    this.gender=null;
    this.serviceStreet.setClothing(null);
  }
}
