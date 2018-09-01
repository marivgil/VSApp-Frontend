import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {Http} from "@angular/http";

@Injectable()
export class ReceptionCentersService{

  extensionUrl: String = "receptionCenter/";

  constructor(private http: Http) { }

  getReceptionCenter(location: string){
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "findReceptionCenterByLocation/" + location);
  }

}
