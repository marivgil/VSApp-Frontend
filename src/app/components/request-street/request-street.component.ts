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

}
