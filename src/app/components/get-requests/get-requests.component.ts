import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {GetRequestsService} from "./get-requests.service";
import {ToastsManager} from "ng2-toastr";
import {WeeklyRound} from "../../interfaces/WeeklyRound";

@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html'
})
export class GetRequestsComponent implements OnInit {

  rounds;
  weeklyRound: WeeklyRound = null;
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
    if (this.weeklyRound == null){
      this.toastr.error('Debe seleccionar un recorrido');
    } else {
      this.getRequest = true;
      this.firstEntry=false;
      /*
      this.service.searchRequest(this.weeklyRound).subscribe(result => {
        this.request = result;
        if(this.request == null){
          this.clothes = [];
        }else{
        */
          this.clothes = this.weeklyRound.request.clothes;
          this.preparedBy = this.weeklyRound.request.preparedBy;
          this.reviewedBy = this.weeklyRound.request.reviewedBy;
       // }
       //   });
    }
  }

}
