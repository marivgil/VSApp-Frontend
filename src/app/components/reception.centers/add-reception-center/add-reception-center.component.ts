import { Component, OnInit } from '@angular/core';
import {ReceptionCentersService} from "../reception.centers.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-reception-center',
  templateUrl: './add-reception-center.component.html'
})
export class AddReceptionCenterComponent implements OnInit {

  phoneRC;
  nameRC;
  surnameRC;
  locationRC;
  mailRC;
  nearbyLocation;
  nearbyLocationList: any[] = [];

  disabledPhoneRC = false;
  disabledNameRC = false;
  disabledSurnameRC = false;
  disabledLocationRC = false;
  disabledMailRC = false;

  constructor(private service: ReceptionCentersService,
              private serviceToastr: ToastrService) { }

  ngOnInit() {
  }

  addNearbyLocation(){
    let nl = {
     "nameLocation": this.nearbyLocation
    };
    this.nearbyLocationList.push(nl);
    this.nearbyLocation = null;
  }

  addReceptionCenter(){
    this.disabledPhoneRC = true;
    this.disabledNameRC = true;
    this.disabledSurnameRC = true;
    this.disabledLocationRC = true;
    this.disabledMailRC = true;
    let receptionCenter = {
      "name": this.nameRC,
      "surname": this.surnameRC,
      "location": this.locationRC,
      "phone": this.phoneRC,
      "nearbyLocations": this.nearbyLocationList,
      "mail": this.mailRC
    };
    this.service.addReceptionCenter(receptionCenter).subscribe();
    this.serviceToastr.success("el centro de recepción fue dado de alta :)");
  }
}
