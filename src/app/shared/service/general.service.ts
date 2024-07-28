import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, catchError, finalize, map, Observable, switchMap, tap } from 'rxjs';
import { ExceptionService } from './exception.service';
import { SpinnerService } from './spinner.service';
import { AccessToJsonService } from './access-to-json.service';
@Injectable({
  providedIn: 'root'
})

export class GeneralService {
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  fromJsonUrl: string = "assets/jsonFiles/apiUrl.json";
  headers = this.getHeader();
  urlData: any = {};
  homeDataJson: any;
  constructor(private http: HttpClient, private _exceptionService: ExceptionService,
    public _spinner: SpinnerService, private _acessToJson: AccessToJsonService
  ) {
  }
  private getUrl(): Observable<any> {
    return this.http.get(this.fromJsonUrl);
  }
  public getHomeJSON(): Observable<any> {
    return this.http.get("/assets/json/sectionDisplaySetting.json");
  }


  // generalPost(url: string, body: any) {
  //   this.showSpinner.next(true);
  //   this._spinner.show();
  //   return this.http
  //     .post(this.urlData.apiUrl + '/' + url, body, { headers: this.headers }).pipe(
  //       map(response => {
  //         let dbRes = <any>response;
  //         if (dbRes) {
  //           this.showSpinner.next(false);
  //           this._spinner.hide();

  //         }
  //         return dbRes;
  //       }),
  //       catchError(error => {
  //         this._exceptionService.catchBadResponse
  //         this.showSpinner.next(false)
  //         this._spinner.hide();

  //         return error
  //       }),
  //       finalize(() => {
  //         this.showSpinner.next(false)
  //         this._spinner.hide();
  //       }

  //       ));
  // }

  generalPost(url: string, body: any): Observable<any> {
    if (this.urlData.apiUrl) {
      this.showSpinner.next(true);
      this._spinner.show();
      return this.http
        .post(this.urlData.apiUrl + '/' + url, body, { headers: this.headers }).pipe(
          map(response => {
            let dbRes = <any>response;
            if (dbRes) {
              this.showSpinner.next(false);
              this._spinner.hide();

            }
            return dbRes;
          }),
          catchError(error => {
            this._exceptionService.catchBadResponse
            this.showSpinner.next(false)
            this._spinner.hide();

            return error
          }),
          finalize(() => {
            this.showSpinner.next(false)
            this._spinner.hide();
          }

          ));
    } else {
      return this.getUrl().pipe(
        switchMap((data) => {
          this.urlData = data;
          this.showSpinner.next(true);
          this._spinner.show();
          return this.http
            .post(this.urlData.apiUrl + '/' + url, body, { headers: this.headers }).pipe(
              map(response => {
                let dbRes = <any>response;
                if (dbRes) {
                  this.showSpinner.next(false);
                  this._spinner.hide();

                }
                return dbRes;
              }),
              catchError(error => {
                this._exceptionService.catchBadResponse
                this.showSpinner.next(false)
                this._spinner.hide();

                return error
              }),
              finalize(() => {
                this.showSpinner.next(false)
                this._spinner.hide();
              }

              ));
        }),
        catchError(error => {
          console.error('Error fetching URL or making PUT request', error);
          throw error;
        })
      );
    }
  }


  // generalPut(url: string, body: any, id: number) {
  //   return this.http.put(this.urlData.apiUrl + '/' + url + '/' + id, body, { headers: this.headers });
  // }


  generalPut(url: string, body: any, id: number): Observable<any> {
    if (this.urlData) {
      return this.http.put(this.urlData.apiUrl + '/' + url + '/' + id, body, { headers: this.headers });
    } else {
      return this.getUrl().pipe(
        switchMap((data) => {
          this.urlData = data;
          return this.http.put(this.urlData.apiUrl + '/' + url + '/' + id, body, { headers: this.headers });
        }),
        catchError(error => {
          console.error('Error fetching URL or making PUT request', error);
          throw error;
        })
      );
    }
  }


  generalDelete(url: string, id: number) {
    this.getUrl();
    return this.http.delete(this.urlData.apiUrl + '/' + url + '/' + id, { headers: this.headers });
  }
  generalGet(url: string, id: number) {
    this.getUrl();
    return this.getWith(this.urlData.apiUrl + '/' + url + '/' + id)
  }

  getWith(url: string) {
    this.getUrl();
    return this.http
      .get(url, { headers: this.headers }).pipe(
        map(response => {
          let temp = <any>response;
          return temp;
        }),
      );

  }
  getHeader() {
    let userhost = window.location.host;

    let headers = {
      'Content-Type': 'application/json',
      'UserHost': userhost,
      'Authorization': 'Basic U2VjbG9naW5JZC8xLEJyYW5jaElkLzEsbGluay8zMTIwLFdvcmtGbG93UGF0aC8yNDczLEZvckRlYnVnL251bGwsQWNjb3VudElkLzEsQnJhbmNoZXNBcnIvMTQ2XzE5XzE3XzFfLE1vZHVsZUlkLzM5'
    };
    return headers;
  }
}
