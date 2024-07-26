// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private linkDataSource = new BehaviorSubject<{ Serial: number | null, NameAr: string | null, NameEn: string | null, ClassName: string | null }>({ Serial: null, NameAr: null, NameEn: null, ClassName: null });
  currentLinkData = this.linkDataSource.asObservable();

  changeLinkData(Serial: number, NameAr: string, NameEn: string, ClassName: string) {
    this.linkDataSource.next({ Serial, NameAr, NameEn, ClassName });
    sessionStorage.setItem('linkSerial', String(Serial));

  }

}
