import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";

  constructor(private http: HttpClient){
  }

  closedRequest(request): Observable<any>{
    let url = URL_BACKEND_HOMO + this.extensionUrl + "createRequest";
    let json = JSON.stringify(request);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(url, params, {headers: headers});
  }

}
