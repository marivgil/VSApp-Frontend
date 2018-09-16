import { Component, OnInit } from '@angular/core';
import {HomeStreetService} from "./home-street.service";
import {GENDER, NAMECLOTHESMAN, NAMECLOTHESWOMAN, ROUNDS, WAIST} from "../../app.consts";
import {Clothes} from "../../interfaces/clothes";


@Component({
  selector: 'app-home-street',
  templateUrl: './home-street.component.html'
})

export class HomeStreetComponent implements OnInit {

  constructor(private service: HomeStreetService) { }

  showSelectedRound = false;
  showAddClothes = false;
  rounds = ROUNDS;
  genders = GENDER;
  waists = WAIST;

  //Un pedido
  round;
  request: Request;
  clothes = [];

  //un ropa
  nameClothes;
  waist;
  gender = '';
  quantityClothes;


  ngOnInit() {
    //this.getRounds()
  }

  getRounds(){
    this.service.getRounds().subscribe(res => {
      this.rounds = res.json();
      console.log(this.rounds);
    });
  }

  selectClothesGender(){
    if (this.gender=='Hombre' || this.gender == 'Nene'){
      this.clothes = NAMECLOTHESMAN;
    }else{
      this.clothes = NAMECLOTHESWOMAN;
    }
  }


}
