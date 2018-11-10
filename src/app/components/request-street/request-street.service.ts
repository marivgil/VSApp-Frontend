import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient} from "@angular/common/http";
import {Clothes} from "../../interfaces/clothes";

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";
  extensionClothingUrl: String = "clothingService/";
  round;
  clothing;
  clothings: Clothes[] = [];

  constructor(private http: HttpClient){
  }

  getRound(){
    return this.round;
  }

  setRound(round){
    this.round = round;
  }

  setClothing(clothing){
    this.clothing = clothing;
  }

  getClothing(){
    return this.clothing;
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
*/
  // trae todos los recorridos
  getAllRounds(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "getAllRounds/").toPromise();
  }

  //trae todas los tipos de prendas
  getAllClothings(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionClothingUrl + "findAllClothings/").toPromise();
  }

  addClothing(clothe){
    this.clothings.push(clothe);
  }

  //trae todas los tamaños de las prendas
  getAllSizeClothings(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionClothingUrl + "findAllSizeClothings/").toPromise();
  }


}
