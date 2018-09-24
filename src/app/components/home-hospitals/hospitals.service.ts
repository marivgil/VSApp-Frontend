import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URL_BACKEND_HOMO} from "../../config";
import {Observable} from "rxjs";

@Injectable()
export class HospitalsService {

  extensionUrl = "hospitalService/";

  constructor(private http: HttpClient) { }

  addProduct(product): Observable<any> {
    let url = URL_BACKEND_HOMO + this.extensionUrl + "createHospitalProduct/";
    let json = JSON.stringify(product);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(url, json, {headers: headers});
  }

  searchHospitalProduct(hospital){
    return this.http.get(URL_BACKEND_HOMO + this.extensionUrl +
      "findProductsByHospital/" + hospital);
  }

}
