import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAllCategory(): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/category/');
  }
  getById(id: number): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/category/' + id);
  }

  getCategoryBrand(id: string): Observable<any>{
    return this.http.get(SERVER_API_URL + 'api/v1/product/brand/?categoryId=' + id);
  }
}
