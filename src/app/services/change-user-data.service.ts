import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChgData} from '../models/ChgData.model';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {UserData} from '../models/UserData';
@Injectable({
  providedIn: 'root'
})
export class ChangeUserDataService {

  constructor(private http: HttpClient) {
  }

  changeUserData(changeUserData: UserData): Observable<any> {
    return this.http.post(SERVER_API_URL + 'api/v1/user/changeuserdate', changeUserData);
  }

  getUserData(): Observable<any> {
    return this.http.get(SERVER_API_URL + 'api/v1/user/getuserdate');
  }
}
