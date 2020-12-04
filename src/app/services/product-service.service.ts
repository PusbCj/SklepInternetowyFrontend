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
  getProduct(id): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/product/id/' + id);
  }

  getAllProductsByParameters(category, age, desc, pageNumber, pageSize, priceHigh, priceLow, brand): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/product/category/' +
     category + '?age=' + age + '&brand=' + brand + '&desc=' + desc +
      '&page=' + pageNumber + '&size=' + pageSize +
      '&priceHigh=' + priceHigh + '&priceLow=' + priceLow
       + '&sort=price,desc');
  }
}
