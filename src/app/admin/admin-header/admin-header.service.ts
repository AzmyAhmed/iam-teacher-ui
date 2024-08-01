import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHeaderService {
  link: any = {};
  constructor() { }
  getLinkFromAdmin() {
    if (this.link.Serial > 0) {
      return this.link;
    }
  }
  setLinkFromAdmin(link: any) {
    this.link = link;
  }
}
