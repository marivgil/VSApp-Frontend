import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Clothes} from "../../interfaces/clothes";

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";
  extensionClothingUrl: String = "clothingService/";
  round;
  clothing;
  clothings: Clothes[] = [];
  others: String[] = [];
  gender;

  constructor(private http: HttpClient){
  }

  getOthers(){
    return this.others;
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

  setClothings(clothing){
    this.clothings = clothing;
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
      "description": '',
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
    this.others = [];
    */
  }

  // trae todos los recorridos
  getAllRounds(): Promise<any>{
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "getAllRounds/").toPromise();
  }

  //trae todas los tipos de prendas
  findAllClothings(genders): Promise<any>{
    let json=[];
    genders.forEach(function (value) {
      json.push(JSON.stringify(value));
    });

    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionClothingUrl + "findAllClothings/"+json).toPromise();
  }

  addClothing(clothe){
    this.clothings.push(clothe);
  }

  addOther(other){
    this.others.push(other)
  }

  setGender(gender) {
    this.gender = gender;

  }

  getGender(){
    return this.gender;
  }

  getClothe(name: any, gender: any) {
    let listc: Clothes[] = [];
    this.clothings.forEach(function (value) {
      if(value.gender==gender)
        if(value.name==name.name){
          listc.push(value)
        }
    });
    return listc;
  }

  setOthers(others: any[]) {
    this.others=others;
  }
}
