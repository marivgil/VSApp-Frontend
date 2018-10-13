import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {RequestStreetService} from "./request-street.service";
import {GENDER, NAMECLOTHESMAN, NAMECLOTHESWOMAN, ROUNDS, WAIST} from "../../app.consts";
import {Router} from "@angular/router";
import {ToastsManager} from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-request-street',
  templateUrl: './request-street.component.html'
})

export class RequestStreetComponent implements OnInit {

  constructor(private service: RequestStreetService,
              private router: Router,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  showSelectedRound = false;
  showAddClothes = false;
  rounds = ROUNDS;
  genders = GENDER;
  waists = WAIST;
  clothes = [];

  // Un pedido
  round = '';
  request: Request;
  clothesRequest = [];
  preparedBy = null;
  reviewedBy = null;
  others = null;

  // una ropa
  name = '';
  waist = '';
  gender = '';
  quantity = 1;


  ngOnInit() {
  }

  selectClothesGender(){
    if (this.gender == 'Hombre' || this.gender == 'Nene') {
      this.clothes = NAMECLOTHESMAN;
    } else {
      this.clothes = NAMECLOTHESWOMAN;
    }
  }

  addClothes() {
    if (this.name == '' || this.waist == '' || this.gender == '') {
      this.toastr.error('Falta cargar información del pedido', 'Ya casi terminas...');
    } else {
      let clothes = {
        "name": this.name,
        "waist": this.waist,
        "quantity": this.quantity,
        "gender": this.gender
      };
      this.clothesRequest.push(clothes);
    }
    this.name = '';
    this.waist = '';
    this.gender = '';
    this.quantity = 1;
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
      "clothes": this.clothesRequest,
      "date": Date.now()
    };
    if (this.preparedBy == null || this.reviewedBy == null || this.clothesRequest == []) {
      this.toastr.error('Falta cargar información del pedido');
    } else {
      this.service.closedRequest(request).subscribe();
      this.toastr.success('Tu pedido fue cargado');
      this.router.navigate(['home']);
    }
  }

  selectedRound(){
    this.showSelectedRound = true;
  }

}
