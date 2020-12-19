import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../app.constants';
import {UsernamePassword} from '../models/UsernamePassword.model';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {UserFromToken} from '../models/UserFromToken';


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
          this.ifHaveAdminRoleSetSessionStrorageInformation(res);
        }
        return res;
      })
    );
  }


  private ifHaveAdminRoleSetSessionStrorageInformation(res): void {
    const token = res.headers.get('Authorization');
    const tokentab = token.replace('Bearer ', '').split('.');
    let user: UserFromToken;
    user = JSON.parse(atob(tokentab[1]));
    if (user.authorities.find(x => x === 'Admin') != null) {
      sessionStorage.setItem('admin', 'true');
    }
  }

  activate(user: string, key: string): Observable<any>{
      return this.http.get(SERVER_API_URL + 'api/v1/signup/' + '?key=' + key + '&username=' + user);
     }
}
