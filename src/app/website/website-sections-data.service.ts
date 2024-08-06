

import { Injectable } from '@angular/core';
import { Controller } from '../../assets/controllers/controllerApi';
import { GeneralService } from '../shared/service/general.service';
const Website_Sections_Data = Controller.controllerApi.Website_Sections_Data;
export interface IWebsite_Sections_Data {
  Serial?: number;
  UserId?: number;
  DescAr: string;
  DescEn: string;
  DetailAr: string;
  DetailEn: string;
  TitleNameAr: string;
  TitleNameEn: string;
  DefaultStp?: number;
  Link: string;
  FaceBookLink: string;
  LinkedInLink: string;
  TwitterLink: string;
  WhatApp: string;
  Email: string;
  Messenger: string;
  LoactionAr: string;
  LoactionEn: string;
  IsActive?: number;
  BookDemoActive?: boolean;
  LiveViewActive?: boolean;
  FaceBookActive?: boolean;
  TwitterActive?: boolean;
  LinkedinActive?: boolean;
  Sort?: number;
  Discount?: number;
  Price?: number;
  FinalPrice?: number;
  DiscountPercent?:number;
  ImgSrc: string;
  App_Links_Stp?: number;
  ReturnCode?: number;
}
@Injectable({
  providedIn: 'root'
})
export class WebsiteSectionsDataService {

  constructor(private http: GeneralService) {
  }
  Website_Sections_DataLoad(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_Sections_DataLoad`, link);
    return data;

  }
  Website_Sections_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_Sections_DataSave`, link);
    return data;

  }

  Website_FirstContent_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_FirstContent_DataSave`, link);
    return data;

  }

  Website_LastContent_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_LastContent_DataSave`, link);
    return data;

  }
  Website_SocialMedia_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_SocialMedia_DataSave`, link);
    return data;

  }
  Website_About_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_About_DataSave`, link);
    return data;

  }
  Website_Feature_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_Feature_DataSave`, link);
    return data;

  }
  Website_Team_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_Team_DataSave`, link);
    return data;

  }
  Website_ContactUs_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_ContactUs_DataSave`, link);
    return data;

  }
  Website_Pricing_DataSave(link: IWebsite_Sections_Data) {
    var data =
      this.http.generalPost(`${Website_Sections_Data}/Website_Pricing_DataSave`, link);
    return data;

  }

}
