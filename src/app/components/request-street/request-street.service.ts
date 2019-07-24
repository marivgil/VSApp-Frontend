import {Injectable} from '@angular/core';
import {URL_BACKEND} from "../../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Clothes} from "../../interfaces/clothes";
import {WeeklyRound} from "../../interfaces/WeeklyRound";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class RequestStreetService {

  extensionUrl: String = "streetService/";
  extensionClothingUrl: String = "clothingService/";
  round;
  clothing;
  clothings: Clothes[] = [];
  others: String[] = [];
  gender;
  weeklyRound: WeeklyRound;
  firstRequest = true;
  preparedBy;
  reviewedBy;


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
/*
  updateRequest(request: any) {
    let url = URL_BACKEND_HOMO + this.extensionUrl + "updateRequest";
    this.weeklyRound.request = request;
    let json = JSON.stringify(this.weeklyRound);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(url, json, {headers: headers}).toPromise();
  }
*/
  //armo el pedido y lo persisto
  closedRequest(): Observable<any> {

    let request = {
      "preparedBy": this.preparedBy,
      "reviewedBy": this.reviewedBy,
      "clothes": this.clothings,
      "date": Date.now(),
      "others":this.getOthers()
    };

    if(this.firstRequest){
      this.firstRequest = false;

      let coord = {
        "lat": 0,
        "lng": 0
      };

      this.weeklyRound = {
        "id": null,
        "description": '',
        "sinceHour": Date.now(),
        "untilHour": Date.now(),
        "currentCoords": coord,
        "request": request,
        "round": this.getRound(),
      };

      let url = URL_BACKEND + this.extensionUrl + "createRequest";
      let json = JSON.stringify(this.weeklyRound);
      let headers = new HttpHeaders().set('Content-Type','application/json');


      return this.http.post(url, json, {headers: headers})
        .map((res: any) => {
          let body = res;
          this.weeklyRound.id = body.id;
          return;
        });


    }else{
      let url = URL_BACKEND + this.extensionUrl + "updateRequest";
      this.weeklyRound.request = request;
      let json = JSON.stringify(this.weeklyRound);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      //return this.http.put(url, json, {headers: headers});

      return this.http.put(url, json, {headers: headers})
        .map((res: any) => {
          return res;
        });
    }

  }

  // trae todos los recorridos
  getAllRounds(): Promise<any>{
    return this.http.get(
      URL_BACKEND +  this.extensionUrl + "getAllRounds/").toPromise();
  }

  //trae todas los tipos de prendas
  findAllClothings(genders): Promise<any>{
    let json=[];
    genders.forEach(function (value) {
      json.push(JSON.stringify(value));
    });

    return this.http.get(
      URL_BACKEND +  this.extensionClothingUrl + "findAllClothings/"+json).toPromise();
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

  setPreparedBy(preparedBy: any) {
    this.preparedBy = preparedBy;
  }

  setReviewedBy(reviewedBy: any) {
    this.reviewedBy = reviewedBy;
  }

  setClosed() {
    this.firstRequest = true;
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
