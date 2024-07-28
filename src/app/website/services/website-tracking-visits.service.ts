import { Injectable } from '@angular/core';
import { WebsiteTrackingDevicesService } from './website-tracking-devices.service';
import { GeneralService } from '../../shared/service/general.service';
import { Controller } from '../../../assets/controllers/controllerApi';
const Website_Trackig_Visits = Controller.controllerApi.Website_Trackig_Visits;
@Injectable({
  providedIn: 'root'
})
export class WebsiteTrackingVisitsService {

  private apiUrl = 'https://your-api-url/api/Tracking'; // Change to your API endpoint

  constructor( private deviceService: WebsiteTrackingDevicesService, private _http: GeneralService) { }

  Website_Tracking_VisitsSave() {
    let device = this.deviceService.getDeviceInfo()
    const visitData = {
      VisitTime: new Date(),
      VisitId: 0,
      LeaveTime: new Date(),
      Duration: 0,
      DeviceType: device.device,
      OS: device.os,
      Browser: device.browser,
      UserAgent: device.userAgent
    };
    var data =
      this._http.generalPost(`${Website_Trackig_Visits}/Website_Tracking_VisitsSave`, visitData);
    return data;

  }
  Website_Tracking_LeavesSave(visitId: number) {
    const visitData = {
      LeaveTime: new Date(),
      VisitId: visitId
    };
    var data =
      this._http.generalPost(`${Website_Trackig_Visits}/Website_Tracking_LeavesSave`, visitData);
    return data;
  }

}
