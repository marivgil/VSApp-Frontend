import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HomeStreetService {

  extensionUrl: String = "streetService/";
  url;

  constructor(public http: HttpClient){
    this.url = URL_BACKEND_HOMO +  this.extensionUrl + "createRequest";
  }

  closedRequest(request){
    console.log("en el service");
    console.log(request);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, request, { headers: headers });
  }

}
