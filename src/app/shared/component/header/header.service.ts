import { Injectable } from '@angular/core';
import { GeneralService } from '../../service/general.service';
import { Controller } from '../../../../assets/controllers/controllerApi';
const sysLinksUrl = Controller.controllerApi.sysLinks;
export interface ISysLink {
  Serial?: number;
  NameAr: string;
  NameEn: string;
  Sort?: number;
  IsActive?: number;
  Module: string;
  ClassName: string;
  RoutePath: string;
}
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: GeneralService) {
  }
  sysLinksLoad(link: ISysLink) {
    var data =
      this.http.generalPost(`${sysLinksUrl}/SysLinksLoad`, link);
    return data;

  }
  sysLinksSave(link: ISysLink) {
    var data =
      this.http.generalPost(`${sysLinksUrl}/SysLinksSave`, link);
    return data;

  }

}
