import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URL_BACKEND_HOMO} from "../../config";

@Injectable()
export class HospitalsService {

  extensionUrl = "hospitalService";

  constructor(private http: HttpClient) { }

  addProduct(product){
    let url = URL_BACKEND_HOMO + this.extensionUrl + "createProduct";
    let json = JSON.stringify(product);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
/*    console.log(url);
    console.log(json);
    console.log(params);
    console.log(headers);
    console.log(this.http.post(url, params, {headers: headers}));
*/
    return this.http.post(url, params, {headers: headers});
  }

}
