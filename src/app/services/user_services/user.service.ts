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
  constructor(public HttpService: HttpService,private http: HttpClient) { }

  login(data) {
    return this.HttpService.post(this.url + '/user/login', data);
  }
  forgotpassword(data) {
    return this.HttpService.post(this.url + '/user/forgotpassword', data);
  }
  resetpassword(data) {
    return this.HttpService.post(this.url + '/user/resetpassword', data);
  }
  registration(data) {
    return this.HttpService.post(this.url + '/user/register', data);
  }
  addwebscraping(data){
    return this.HttpService.post(this.url + '/webScrape/addwebscripe', data);
  } 
  getwebscraping(data): Observable<any> {
    return this.http.post(this.url + '/webScrape/getwebscripe',data, {
      headers: new HttpHeaders().set("jwt_token", localStorage.getItem("token")),
      observe: 'response'
    });
  }
}