import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_BACKEND_HOMO} from "../../config";

@Injectable()
export class GetRequestsService {

  extensionUrl: String = "sedeService/";

  constructor(private http: HttpClient) { }

  searchRequest(round){
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "findRequestByRound/" + round);
  }

}
