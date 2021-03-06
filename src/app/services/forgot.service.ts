import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {ChgForgotPwd} from '../models/ChgForgotPwd.model';
@Injectable({
  providedIn: 'root'
})
export class ForgotPWDService {

  constructor(private http: HttpClient) { }

  sendEmail(user: string): Observable<any>{
    return this.http.post(SERVER_API_URL + 'api/v1/signup/forget/', user);
  }

  changePass(key: string, pass: string, user: string): Observable<any>{
    const temp = SERVER_API_URL + 'api/v1/signup/changeassword/?key=' + key + '&username=' + user;
    console.log(temp);
    return this.http.post(SERVER_API_URL + 'api/v1/signup/changeassword/?key=' + key + '&username=' + user, pass);
  }
}
