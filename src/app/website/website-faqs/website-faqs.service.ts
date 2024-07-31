import { Injectable } from '@angular/core';
import { Controller } from '../../../assets/controllers/controllerApi';
import { GeneralService } from '../../shared/service/general.service';
const apiUrl = Controller.controllerApi.Website_Faqs;
export interface Website_Faqs {
  Serial?: number;
  Question: string;
  Answer: string;
  App_Links_Stp?: number;
  UserId?: number;
  IsActive?: number;
  Sort?: number;
  DefaultStp?: number;
  TitleNameAr: string;
  TitleNameEn: string;
  ReturnCode?: number;
}
@Injectable({
  providedIn: 'root'
})
export class WebsiteFaqsService {
  constructor(private _http: GeneralService) { }
  Website_FaqsSave(Website_Faqs: Website_Faqs) {
    var data = this._http.generalPost(apiUrl + '/Website_FaqsSave', Website_Faqs);
    return data;
  }
  Website_FaqsLoad(Website_Faqs: Website_Faqs) {
    var data = this._http.generalPost(apiUrl + '/Website_FaqsLoad', Website_Faqs);
    return data;
  }
}
