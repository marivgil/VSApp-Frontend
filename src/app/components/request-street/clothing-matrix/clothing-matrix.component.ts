import {Component, OnInit} from '@angular/core';
import {Round} from "../../../interfaces/Round";
import {RequestStreetService} from "../request-street.service";

@Component({
  selector: 'app-clothing-matrix',
  templateUrl: './clothing-matrix.component.html'
})
export class ClothingMatrixComponent implements OnInit {

  clothings : any;
  round:Round;
  other;

  constructor(private serviceStreet: RequestStreetService) { }

  async ngOnInit() {
    this.round = this.serviceStreet.getRound();
    //this.clothings = await this.serviceStreet.findAllClothings();
  }

  setClothing(clothing){
    this.serviceStreet.setClothing(clothing);
  }

  addOther(){
    this.serviceStreet.addOther(this.other);
  }

  async setClothingWoman(){
    this.clothings = await this.serviceStreet.findAllClothings([0,1]);
    this.serviceStreet.setGender('MUJER');
  }

  async setClothingMan(){
    this.clothings = await this.serviceStreet.findAllClothings([0,2]);
    this.serviceStreet.setGender('HOMBRE');
  }

  async setClothingBoy(){
    this.clothings = await this.serviceStreet.findAllClothings([0,2,3]);
    this.serviceStreet.setGender('NENE');
  }

  async setClothingGirl(){
    this.clothings = await this.serviceStreet.findAllClothings([0,1,3]);
    this.serviceStreet.setGender('NENA');
  }
}
