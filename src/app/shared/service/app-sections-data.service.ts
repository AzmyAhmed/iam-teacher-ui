
import { Injectable } from '@angular/core';
import { Controller } from '../../../assets/controllers/controllerApi';
import { GeneralService } from './general.service';
const App_Sections_Data = Controller.controllerApi.App_Sections_Data;
export interface Iapp_Sections_Data {
  Serial?: number;
  UserId?: number;
  DescAr: string;
  DescEn: string,
  DetailAr: string,
  DetailEn: string,
  TitleNameAr: string;
  TitleNameEn: string;
  DefaultStp?: number;
  Link: string;
  FaceBookLink: string;
  LinkedInLink: string;
  TwitterLink: string,
  IsActive?: number,
  Sort?: number,
  ImgSrc: string,
  App_Links_Stp?: number;
}
@Injectable({
  providedIn: 'root'
})
export class AppSectionsDataService {

  constructor(private http: GeneralService) {
  }
  app_Sections_DataLoad(link: Iapp_Sections_Data) {
    var data =
      this.http.generalPost(`${App_Sections_Data}/App_Sections_DataLoad`, link);
    return data;

  }
  app_Sections_DataSave(link: Iapp_Sections_Data) {
    var data =
      this.http.generalPost(`${App_Sections_Data}/App_Sections_DataSave`, link);
    return data;

  }

}
