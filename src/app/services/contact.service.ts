import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {Contact} from '../models/Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(message: Contact): Observable<any>{
    return this.http.post(SERVER_API_URL + 'api/v1/contact/', message);
  }
}
