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
  nearbyLocation;
  nearbyLocationList: any[] = [];

  disabledPhoneRC = false;
  disabledNameRC = false;
  disabledSurnameRC = false;
  disabledLocationRC = false;

  constructor(private service: ReceptionCentersService,
              private serviceToastr: ToastrService) { }

  ngOnInit() {
  }

  addNearbyLocation(){
    this.nearbyLocationList.push(this.nearbyLocation);
    this.nearbyLocationList = null;
  }

  addReceptionCenter(){
    this.disabledPhoneRC = true;
    this.disabledNameRC = true;
    this.disabledSurnameRC = true;
    this.disabledLocationRC = true;
    let receptionCenter = {
      "name": this.nameRC,
      "surname": this.surnameRC,
      "location": this.locationRC,
      "phone": this.phoneRC,
      "nearbyLocations": this.nearbyLocationList
    };
    this.service.addReceptionCenter(receptionCenter).subscribe();
    this.serviceToastr.success("el centro de recepción fue dado de alta :)")
  }
}
