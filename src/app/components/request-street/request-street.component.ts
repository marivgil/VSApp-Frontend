import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {RequestStreetService} from "./request-street.service";
import {Router} from "@angular/router";
import {ToastsManager} from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-request-street',
  templateUrl: './request-street.component.html'
})

export class RequestStreetComponent implements OnInit {

  constructor(private serviceStreet: RequestStreetService,
              private router: Router,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager
              ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }


  // Un pedido
  round = '';
  rc;
  clothing;
  clothes : any = [];
  rounds : any = [];
  clothesRequest;
  preparedBy = null;
  reviewedBy = null;
  viewClothing = false;


  async ngOnInit() {
    //this.clothes = await this.serviceStreet.findAllClothingsUp();
    this.serviceStreet.findAllClothingsUp().
    subscribe(res => {
      this.clothes = res;
    });
    this.clothes.subscribe(res => console.log(res));
    //this.rounds = await this.serviceStreet.getAllRounds();
    this.serviceStreet.getAllRounds().
    subscribe(res => {
      this.rounds = res;
    });
  }


  addClothes() {
    this.viewClothing = true;
    console.log(this.viewClothing)
    /*
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
    */
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
      this.serviceStreet.closedRequest(request).subscribe();
      this.toastr.success('Tu pedido fue cargado');
      this.router.navigate(['home']);
    }
  }

}
