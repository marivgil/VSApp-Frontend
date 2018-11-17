import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URL_BACKEND_HOMO} from "../../config";

@Injectable()
export class GetRequestsService {

  extensionUrl: String = "streetService/";

  constructor(private http: HttpClient) { }

  searchRequest(round): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "findRequestByRound/" + round).toPromise();
  }

  findAllRequests(): Promise<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "findAllRequests/", {headers: headers}).toPromise();
  }

}
