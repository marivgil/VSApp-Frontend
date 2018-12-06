import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {RequestStreetService} from "../request-street.service";
import {ToastsManager} from "ng5-toastr";
import {Clothes} from "../../../interfaces/clothes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-close-request',
  templateUrl: './close-request.component.html'
})
export class CloseRequestComponent implements OnInit {

  clothings: Clothes[] = [];
  preparedBy;
  reviewedBy;
  others;

  constructor(private serviceStreet: RequestStreetService,
              private _vcr: ViewContainerRef,
              public toastr: ToastsManager,
              private router: Router
              ) {
                  this.toastr.setRootViewContainerRef(_vcr);
                }

  async ngOnInit() {
    this.clothings = await this.serviceStreet.getClothings();
    this.others = this.serviceStreet.getOthers();
  }

  closeRequest(){
    this.serviceStreet.setPreparedBy(this.preparedBy);
    this.serviceStreet.setReviewedBy(this.reviewedBy);

    if (this.preparedBy == null || this.preparedBy == '')
      this.toastr.error('Te falta ingresar la persona que armo el pedido');
      else if (this.reviewedBy == null || this.reviewedBy == '')
        this.toastr.error('Te falta ingresar la persona que reviso el pedido');
        else if((this.clothings == [] || this.clothings == null)
                  && (this.others == [] || this.others == null))
              this.toastr.error('No hay prendas cargadas para este pedido');
    else {
      //this.serviceStreet.closedRequest();

      this.serviceStreet.closedRequest().subscribe(res => {
        return res;
      });


      this.serviceStreet.setClothings([]);
      this.serviceStreet.setOthers([]);
      this.serviceStreet.setClosed();
      this.toastr.success('Tu pedido fue cargado');
      this.router.navigate(['home']);
    }

  }

  subQuantity(clothing){
    const index = this.clothings.indexOf(clothing);
    this.clothings.splice(index, 1);
  }

  deleteOther(other){
    const index = this.others.indexOf(other);
    this.others.splice(index, 1);
  }

}
