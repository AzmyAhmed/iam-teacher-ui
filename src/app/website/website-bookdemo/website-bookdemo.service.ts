import { Injectable } from '@angular/core';
import { GeneralService } from '../../shared/service/general.service';
import { Controller } from '../../../assets/controllers/controllerApi';
const apiUrl = Controller.controllerApi.Website_BookDemo;

export interface Website_BookDemo {
  Serial: number;
  UserTypeSerial?: number;
  FullName: string;
  PhoneNumber: string;
  Address: string;
  IsExpectedCLient?: number;
  ReturnCode?:number;
}
@Injectable({
  providedIn: 'root'
})
export class WebsiteBookdemoService {

  constructor(private _http: GeneralService) { }

  Website_BookDemoSave(Website_BookDemo: Website_BookDemo) {
    var data = this._http.generalPost(apiUrl + '/Website_BookDemoSave', Website_BookDemo);
    return data;
  }
  Website_BookDemoLoad(Website_BookDemo: Website_BookDemo) {
    var data = this._http.generalPost(apiUrl + '/Website_BookDemoLoad', Website_BookDemo);
    return data;
  }
}
