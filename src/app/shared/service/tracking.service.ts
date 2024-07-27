import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from './device.service';
import { GeneralService } from './general.service';
import { Controller } from '../../../assets/controllers/controllerApi';
const App_Trackig_Visits = Controller.controllerApi.App_Trackig_Visits;
@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private apiUrl = 'https://your-api-url/api/Tracking'; // Change to your API endpoint

  constructor(private http: HttpClient, private deviceService: DeviceService, private _http: GeneralService) { }

  App_Tracking_VisitsSave() {
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
      this._http.generalPost(`${App_Trackig_Visits}/App_Tracking_VisitsSave`, visitData);
    return data;

  }
  App_Tracking_LeavesSave(visitId: number) {
    const visitData = {
      LeaveTime: new Date(),
      VisitId: visitId
    };
    var data =
      this._http.generalPost(`${App_Trackig_Visits}/App_Tracking_VisitsSave`, visitData);
    return data;
  }

}
