import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class HomeStreetService {

  extensionUrl: String = "streetService/";

  constructor(private http: Http){
  }

  closedRequest(request){
    console.log("en el service");
    console.log(request);
    let url = URL_BACKEND_HOMO +  this.extensionUrl + "createRequest";
    console.log(url);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ( { headers: header });
    return this.http.post(url, request, options);
  }

}
