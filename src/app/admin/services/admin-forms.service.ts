import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminFormsService {

  private configUrl = 'assets/jsonFiles/Development/admin-forms.json';

  constructor(private http: HttpClient) { }
  getFormConfig(formName: string): Observable<any> {
    return this.http.get(`${this.configUrl}`);
  }
}
