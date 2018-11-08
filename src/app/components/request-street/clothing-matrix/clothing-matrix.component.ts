import {Component, Input, OnInit} from '@angular/core';
import {ClothingComponent} from "../clothing/clothing.component";
import {Round} from "../../../interfaces/Round";
import {RequestStreetService} from "../request-street.service";

@Component({
  selector: 'app-clothing-matrix',
  templateUrl: './clothing-matrix.component.html'
})
export class ClothingMatrixComponent implements OnInit {

  clothes : any = ['Remera', 'Camisa', 'Pantalon'];
  round:Round;

  @Input() clothingComponent: ClothingComponent;

  constructor(private serviceStreet: RequestStreetService) { }

  async ngOnInit() {
    this.round = this.serviceStreet.getRound();
    //this.clothes = await this.serviceStreet.findAllClothingsUp();
  }


}
