import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/Register.model';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {RegData} from '../models/RegData';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(register: RegData): Observable<any>{
    return this.http.post(SERVER_API_URL + 'api/v1/signup/', register);
  }
}
