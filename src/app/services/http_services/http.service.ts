import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.url;
  httpClient: any;
  constructor(private http: HttpClient) { }

  post(url, data) {
    return this.http.post(url, data);
  }
  post1(url,data,header){
    return this.http.post(url,data,header);
  }
  get(url, data, header){
    return this.http.get(url,header);
  }
}