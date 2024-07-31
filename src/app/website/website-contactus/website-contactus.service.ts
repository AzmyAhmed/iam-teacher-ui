import { Injectable } from '@angular/core';
import { GeneralService } from '../../shared/service/general.service';
import { Controller } from '../../../assets/controllers/controllerApi';
const apiUrl = Controller.controllerApi.Website_ContactUs;

export interface Website_ContactUs {
  Serial: number;
  FullName: string;
  PhoneNumber: string;
  Address: string;
  Email: string;
  Message: string;
  Reply: string;
  ReturnCode?: number;
}
@Injectable({
  providedIn: 'root'
})
export class WebsiteContactusService {

  constructor(private _http: GeneralService) {

  }
  Website_ContactUsSave(Website_ContactUs: Website_ContactUs) {
    var data = this._http.generalPost(apiUrl + '/Website_ContactUsSave', Website_ContactUs);
    return data;
  }
  Website_ContactUsLoad(Website_ContactUs: Website_ContactUs) {
    var data = this._http.generalPost(apiUrl + '/Website_ContactUsLoad', Website_ContactUs);
    return data;
  }
}
