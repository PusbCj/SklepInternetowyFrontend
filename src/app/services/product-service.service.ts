import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {UsernamePassword} from '../models/UsernamePassword.model';
import {Product} from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  addFile(file: File): Observable<any>{
    const fd = new FormData();
    fd.append('file', file, file.name);
    return this.http.post(SERVER_API_URL + 'api/v1/api/file/', fd, {responseType: 'text'} );
  }
  addProduct(product: Product): Observable<any>{
    return this.http.post(SERVER_API_URL + 'api/v1/product/', product);
  }
}
