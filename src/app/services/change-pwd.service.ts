import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChgPwd} from '../models/ChgPwd.model';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {PWDData} from '../models/PWDData';
@Injectable({
  providedIn: 'root'
})
export class ChangePWDService {

  constructor(private http: HttpClient) { }

  changePassword(changePassword: PWDData): Observable<any>{
    return this.http.post(SERVER_API_URL + 'api/v1/user/changepassword', changePassword);
  }
}
