import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Clothes} from "../../interfaces/clothes";
import {WeeklyRound} from "../../interfaces/WeeklyRound";

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";
  extensionClothingUrl: String = "clothingService/";
  round;
  clothing;
  clothings: Clothes[] = [];
  weeklyRound: WeeklyRound;

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

  getClothings(){
    return this.clothings;
  }

  //armo el pedido y lo persisto
  closedRequest(request): Promise<any>{

    let coord = {
      "lat": 0,
      "lng": 0
    };

    let weeklyRound = {
      "description": 'Esto es un prueba',
      "sinceHour": Date.now(),
      "untilHour": Date.now(),
      "currentCoords": coord,
      "request": request,
      "round": this.getRound(),
    };


    let url = URL_BACKEND_HOMO + this.extensionUrl + "createRequest";
    let json = JSON.stringify(weeklyRound);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(url, json, {headers: headers}).toPromise();
    /*
    this.round= null;
    this.clothing= null;
    this.clothings = [];
    */
  }

  // trae todos los recorridos
  getAllRounds(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "getAllRounds/").toPromise();
  }

  //trae todas los tipos de prendas
  findAllClothings(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionClothingUrl + "findAllClothings/").toPromise();
  }

  addClothing(clothe){
    this.clothings.push(clothe);
  }

}
