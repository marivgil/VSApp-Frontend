import {Component, OnInit} from '@angular/core';
import {RequestStreetService} from "./request-street.service";
import {Round} from "../../interfaces/Round";


@Component({
  selector: 'app-request-street',
  templateUrl: './request-street.component.html'
})

export class RequestStreetComponent implements OnInit {


  round : Round;
  rounds : any = [];

  constructor(private serviceStreet: RequestStreetService,
              ) {}

  async ngOnInit() {
    this.rounds = await this.serviceStreet.getAllRounds();
  }

  setRound(round) {
    this.round = round.name;
    this.serviceStreet.setRound(round);
  }

/*
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
*/
}
