import { Injectable } from '@angular/core';
import {URL_BACKEND} from "./config";
//import {Http} from "@angular/http";
import {HttpHeaders, HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  userProfile;
  extensionUrl: String = "servicesUsers/";

  constructor(private http: HttpClient) { }

  getUser(mail: string){

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    return this.http.get(
      URL_BACKEND +  this.extensionUrl + "findUserByMail/" + mail,{headers: headers});
  }

  userNoExist() {

  }
}
