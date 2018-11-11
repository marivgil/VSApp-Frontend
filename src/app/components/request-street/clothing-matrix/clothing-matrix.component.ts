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
    this.clothings = await this.serviceStreet.findAllClothings();
  }

  setClothing(clothing){
    this.serviceStreet.setClothing(clothing);
  }

  addOther(){
    this.serviceStreet.addOther(this.other);
  }

}
