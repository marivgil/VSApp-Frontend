import { Component, OnInit } from '@angular/core';
import {RequestStreetService} from "./request-street.service";
import {GENDER, NAMECLOTHESMAN, NAMECLOTHESWOMAN, ROUNDS, WAIST} from "../../app.consts";


@Component({
  selector: 'app-request-street',
  templateUrl: './request-street.component.html'
})

export class RequestStreetComponent implements OnInit {

  constructor(private service: RequestStreetService) { }

  showSelectedRound = false;
  showAddClothes = false;
  rounds = ROUNDS;
  genders = GENDER;
  waists = WAIST;
  clothes = [];

  //Un pedido
  round;
  request: Request;
  clothesRequest = [];
  preparedBy;
  reviewedBy;

  //una ropa
  nameClothes;
  waist;
  gender = '';
  quantityClothes=1;


  ngOnInit() {
  }

  selectClothesGender(){
    if (this.gender=='Hombre' || this.gender == 'Nene'){
      this.clothes = NAMECLOTHESMAN;
    }else{
      this.clothes = NAMECLOTHESWOMAN;
    }
  }

  addClothes(){
    let clothes = {
      "nameClothes": this.nameClothes,
      "waist": this.waist,
      "quantityClothes": this.quantityClothes,
      "gender": this.gender
    };

    this.clothesRequest.push(clothes);

  }

  addQuantity(clothes){
    clothes.quantityClothes ++;
  }

  subQuantity(clothes){
    if (clothes.quantityClothes > 0)
      clothes.quantityClothes --;
  }

  closedRequest(){
    let request = {
      "round": this.round,
      "preparedBy": this.preparedBy,
      "reviewedBy": this.reviewedBy,
      //"clothes": this.clothesRequest
    };
    console.log("en el ts");
    this.service.closedRequest(request);
  }

}
