import { Injectable } from '@angular/core';
import { Controller } from '../../../assets/controllers/controllerApi';
import { GeneralService } from '../../shared/service/general.service';
const Website_User = Controller.controllerApi.Website_User;
export interface IWebsite_User {
  Id: number;
  UserTypeSerial: number;
  FullName: string;
  PhoneNumber: string;
  Address: string;
  Email: string;
  Password: string;
  Token: string;
  Role: string;
  PricingListSerial: number;
  ReturnCode: number;
}
@Injectable({
  providedIn: 'root'
})
export class WebsiteUserSignupService {

  constructor(private _http: GeneralService) { }

  Website_UserLoginAuthenticate(website_User: IWebsite_User) {
    var data = this._http.generalPost(Website_User + '/Website_UserLoginAuthenticate', Website_User);
    return data;
  }
  Website_UserSignupAuthenticate(website_User: IWebsite_User) {
    var data = this._http.generalPost(Website_User + '/Website_UserSignupAuthenticate', Website_User);
    return data;
  }
}
