import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";
  extensionClothingUrl: String = "clothingService/";
  round;

  constructor(private http: HttpClient){
  }

  getRound(){
    return this.round;
  }

  setRound(round){
    this.round = round;
  }
/*
  //armo el pedido y lo persisto
  closedRequest(request): Observable<any>{
    let url = URL_BACKEND_HOMO + this.extensionUrl + "createRequest";
    let json = JSON.stringify(request);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(url, params, {headers: headers});
  }

  //traigo la lista de ropas
  findAllClothingsUp(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionClothingUrl + "findAllClothingsUp/").toPromise();
  }
*/
  // trae todos los recorridos
  getAllRounds(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "getAllRounds/").toPromise();
  }

  getAllClothings(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionClothingUrl + "findAllClothings/").toPromise();
  }

}
