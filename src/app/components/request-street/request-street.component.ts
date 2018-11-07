import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
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
  rounds : any = [];
  clothesRequest;
  preparedBy = null;
  reviewedBy = null;

  async ngOnInit() {
    //this.clothes = await this.serviceStreet.findAllClothingsUp();
    this.rounds = await this.serviceStreet.getAllRounds();
  }


  addClothes(round) {
    this.round = round;
    console.log(this.round);
  }


  closedRequest(){
    let request = {
      "round": this.round,
      "preparedBy": this.preparedBy,
      "reviewedBy": this.reviewedBy,
      "clothes": this.clothesRequest,
      "date": Date.now()
    };
    //FIXME validaciones separadas para mejor feedback al usuario
    if (this.preparedBy == null || this.reviewedBy == null || this.clothesRequest == []) {
      this.toastr.error('Falta cargar información del pedido');
    } else {
      this.serviceStreet.closedRequest(request).subscribe();
      this.toastr.success('Tu pedido fue cargado');
      this.router.navigate(['home']);
    }
  }

}
