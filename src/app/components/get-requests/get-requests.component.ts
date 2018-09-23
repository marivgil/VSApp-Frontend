import { Component, OnInit } from '@angular/core';
import {ROUNDS} from "../../app.consts";
import {GetRequestsService} from "./get-requests.service";

@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html'
})
export class GetRequestsComponent implements OnInit {

  rounds = ROUNDS;
  round;
  request;
  clothes = [];
  c;
  rc;

  constructor(private service: GetRequestsService) { }

  ngOnInit() {

  }

  searchRequest(){
    this.service.searchRequest(this.round).subscribe(result => {
      this.request = result;
      this.clothes = this.request.clothes;
        });
  }

}
