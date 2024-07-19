import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IamteacherFormsService {
  private configUrl = 'assets/jsonFiles/iamteacher-forms.json';

  constructor(private http: HttpClient) { }
  getFormConfig(formName: string): Observable<any> {
    return this.http.get(`${this.configUrl}`);
  }
}
