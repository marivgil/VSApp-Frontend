import { Injectable } from '@angular/core';
import {URL_BACKEND_HOMO} from "./config";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  userProfile;
  extensionUrl: String = "servicesUsers/";

  constructor(private http: Http) { }

  getUser(mail: string){
    return this.http.get(
      URL_BACKEND_HOMO +  this.extensionUrl + "findUserByMail/" + mail);
  }

  userNoExist() {

  }
}
