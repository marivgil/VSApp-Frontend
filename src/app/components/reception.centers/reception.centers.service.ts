import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ReceptionCentersService{

  extensionUrl: String = "receptionCenter/";

  constructor(private http: HttpClient) { }

  getReceptionCenter(location: string): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "findReceptionCenterByLocation/" + location).toPromise();
  }

  addReceptionCenter(receptionCenter): Observable<any> {
    let url = URL_BACKEND_HOMO + this.extensionUrl + "createReceptionCenter";
    let json = JSON.stringify(receptionCenter);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(url, json, {headers: headers});
  }
}
