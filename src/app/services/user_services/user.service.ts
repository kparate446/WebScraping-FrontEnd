import { Injectable } from '@angular/core';
import { HttpService } from '../http_services/http.service';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url;
  constructor(public HttpService: HttpService, private http: HttpClient) { }

  public login(data) {
    return this.HttpService.post(this.url + '/user/login', data);
  }
  public forgotpassword(data) {
    return this.HttpService.post(this.url + '/user/forgotpassword', data);
  }
  public resetpassword(data) {
    return this.HttpService.post(this.url + '/user/resetpassword', data);
  }
  public registration(data) {
    return this.HttpService.post(this.url + '/user/register', data);
  }
  public addwebscraping(data) {
    return this.HttpService.post(this.url + '/webScrape/addwebscripe', data);
  }
  public getwebscraping(data:any):any{
    return this.HttpService.postRequest('/webScrape/getwebscripe',data);
   }
}