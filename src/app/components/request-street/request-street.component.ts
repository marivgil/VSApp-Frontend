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
  name;
  waist;
  gender = '';
  quantity=1;


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
      "name": this.name,
      "waist": this.waist,
      "quantity": this.quantity,
      "gender": this.gender
    };

    this.clothesRequest.push(clothes);

  }

  addQuantity(clothes){
    clothes.quantity ++;
  }

  subQuantity(clothes){
    if (clothes.quantity > 0)
      clothes.quantity --;
  }

  closedRequest(){
    let request = {
      "round": this.round,
      "preparedBy": this.preparedBy,
      "reviewedBy": this.reviewedBy,
      "clothes": this.clothesRequest
    };
    this.service.closedRequest(request).subscribe();
  }

}
