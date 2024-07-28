import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsiteTrackingDevicesService {

  getDeviceInfo() {
    const userAgent = navigator.userAgent;
    let device = 'Unknown';

    if (/android/i.test(userAgent)) {
      device = 'Android';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !((window as any).MSStream)) {
      device = 'iOS';
    } else if (/windows phone/i.test(userAgent)) {
      device = 'Windows Phone';
    } else if (/linux/i.test(userAgent)) {
      device = 'Linux';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
      device = 'Mac';
    } else if (/windows nt/i.test(userAgent)) {
      device = 'Windows';
    }

    return {
      device,
      userAgent,
      os: navigator.platform,
      browser: this.getBrowserName(),
    };
  }

  getBrowserName() {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';

    if (/firefox/i.test(userAgent)) {
      browser = 'Firefox';
    } else if (/chrome|chromium|crios/i.test(userAgent)) {
      browser = 'Chrome';
    } else if (/safari/i.test(userAgent)) {
      browser = 'Safari';
    } else if (/opr\//i.test(userAgent)) {
      browser = 'Opera';
    } else if (/edg/i.test(userAgent)) {
      browser = 'Edge';
    } else if (/msie|trident/i.test(userAgent)) {
      browser = 'Internet Explorer';
    }

    return browser;
  }
}
