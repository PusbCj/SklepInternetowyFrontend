import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../app.constants';
import {UsernamePassword} from '../models/UsernamePassword.model';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }


  signin(login: UsernamePassword): Observable<any>{
    return this.http.post(SERVER_API_URL + 'login', login, {observe: 'response'}).pipe(
      share(), map( res => {
        if (res.headers.get('Authorization').startsWith('Bearer')) {
          sessionStorage.setItem('token', res.headers.get('Authorization'));
        }
        return res;
      })
    );
  }


  activate(user: string, key: string): Observable<any>{
      return this.http.get(SERVER_API_URL + 'api/v1/signup/' + '?key=' + key + '&username=' + user);
     }
}
