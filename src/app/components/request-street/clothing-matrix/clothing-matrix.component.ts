import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Round} from "../../../interfaces/Round";
import {RequestStreetService} from "../request-street.service";
import {ToastsManager} from "ng2-toastr";
//import {ClothingComponent} from "../clothing/clothing.component";

@Component({
  selector: 'app-clothing-matrix',
  templateUrl: './clothing-matrix.component.html'
})
export class ClothingMatrixComponent implements OnInit {

  clothings : any;
  round:Round;
  other;
  clothes;

  constructor(private serviceStreet: RequestStreetService,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager,) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  async ngOnInit() {
    this.round = this.serviceStreet.getRound();
  }

  getClothes(clothing, gender){
    this.serviceStreet.getClothe(
      this.serviceStreet.getClothing().name,
      this.serviceStreet.getGender())
  }

  setClothing(clothing){
    this.serviceStreet.setClothing(clothing);
    this.clothes = this.serviceStreet.getClothe(clothing, this.serviceStreet.getGender());
  }

  addOther(){
    this.serviceStreet.addOther(this.other);
    this.other=null;
    this.toastr.success('Se cargó tu pedido');
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
