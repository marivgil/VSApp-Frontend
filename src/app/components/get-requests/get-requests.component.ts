import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {GetRequestsService} from "./get-requests.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html'
})
export class GetRequestsComponent implements OnInit {

  rounds;
  weeklyRound = '';
  request;
  clothes = [];
  c;
  rc;
  firstEntry;
  preparedBy;
  reviewedBy;
  getRequest = false;

  constructor(private service: GetRequestsService,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.firstEntry= true;
    this.service.findAllRequests().subscribe(result => {
      this.rounds = result;
    });
  }

  searchRequest(){
    if (this.weeklyRound == ''){
      this.toastr.error('Debe seleccionar un recorrido');
    } else {
      this.getRequest = true;
      this.firstEntry=false;
      this.service.searchRequest(this.weeklyRound).subscribe(result => {
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

}
