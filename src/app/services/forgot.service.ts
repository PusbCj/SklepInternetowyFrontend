import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChgPwd} from '../models/ChgPwd.model';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {PWDData} from '../models/PWDData';
@Injectable({
  providedIn: 'root'
})
export class ForgotPWDService {

  constructor(private http: HttpClient) { }

  sendEmail(user: string): Observable<any>{
    return this.http.post(SERVER_API_URL + 'api/v1/signup/forget/', user);
  }
}
