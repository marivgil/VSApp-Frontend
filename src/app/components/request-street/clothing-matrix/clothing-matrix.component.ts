import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Round} from "../../../interfaces/Round";
import {RequestStreetService} from "../request-street.service";
import {ToastsManager} from "ng5-toastr";
import {ClothingComponent} from "../clothing/clothing.component";

@Component({
  selector: 'app-clothing-matrix',
  templateUrl: './clothing-matrix.component.html'
})
export class ClothingMatrixComponent implements OnInit {

  round:Round;
  other;
  clothings : any;
  others: String[];
  @ViewChild('clothingCompw') clothingComponentw:ClothingComponent;
  @ViewChild('clothingCompm') clothingComponentm:ClothingComponent;
  @ViewChild('clothingCompg') clothingComponentg:ClothingComponent;
  @ViewChild('clothingCompb') clothingComponentb:ClothingComponent;

  constructor(private serviceStreet: RequestStreetService,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager,) {
    this.toastr.setRootViewContainerRef(_vcr);
  }


  addOther(){
    this.toastr.success('Se cargó tu pedido');
    this.serviceStreet.addOther(this.other);
    this.other=null;
    this.others = this.serviceStreet.getOthers()
  }


  async ngOnInit() {
    this.round = this.serviceStreet.getRound();
  }

  getClothes(clothing, gender){
    this.serviceStreet.getClothe(
      this.serviceStreet.getClothing().name,
      this.serviceStreet.getGender())
  }

  async setClothingWoman(){
    this.clothings = await this.serviceStreet.findAllClothings([0,1]);
    this.serviceStreet.setGender('MUJER');
    this.clothingComponentw.clothings = this.clothings;
  }

  async setClothingMan(){
    this.clothings = await this.serviceStreet.findAllClothings([0,2]);
    this.serviceStreet.setGender('HOMBRE');
    this.clothingComponentm.clothings = this.clothings;
  }

  async setClothingBoy(){
    this.clothings = await this.serviceStreet.findAllClothings([0,2,3]);
    this.serviceStreet.setGender('NENE');
    this.clothingComponentb.clothings = this.clothings;
  }

  async setClothingGirl(){
    this.clothings = await this.serviceStreet.findAllClothings([0,1,3]);
    this.serviceStreet.setGender('NENA');
    this.clothingComponentg.clothings = this.clothings;
  }
}
