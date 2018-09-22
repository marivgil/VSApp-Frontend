import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";

  constructor(private http: HttpClient,){
  }

  closedRequest(producto): Observable<any>{
    let url = URL_BACKEND_HOMO + this.extensionUrl + "createRequest";
    let json = JSON.stringify(producto);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(url);
    console.log(json);
    console.log(params);
    console.log(headers);
    return this.http.post(url, params, {headers: headers});
  }

}
