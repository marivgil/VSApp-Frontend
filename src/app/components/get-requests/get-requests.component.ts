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
  firstEntry;
  preparedBy;
  reviewedBy;

  constructor(private service: GetRequestsService) { }

  ngOnInit() {
    this.firstEntry= true;
  }

  searchRequest(){
    this.firstEntry=false;
    this.service.searchRequest(this.round).subscribe(result => {
      this.request = result;
      if(this.request == null){
        this.clothes = [];
      }else{
        this.clothes = this.request.clothes;
        this.preparedBy = this.request.preparedBy;
        this.reviewedBy = this.request.reviewedBy;
      }
        });
  }

}
