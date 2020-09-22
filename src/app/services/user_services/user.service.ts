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
  constructor(public httpService: HttpService) { }

  login(data) {
    return this.httpService.post(this.url + '/user/login', data);
  }

  forgotpassword(data) {
    return this.httpService.post(this.url + '/user/forgotpassword', data);
  }

  resetpassword(data): Observable<any>{
    return this.httpService.post1(this.url + '/user/resetpassword'+ data,null,{
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  }

  registration(data) {
    return this.httpService.post(this.url + '/user/register', data);
  }

  addwebscraping(data): Observable<any> {
    return this.httpService.post1(this.url + '/webScrape/addwebscripe' + data, null, {
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  }

  getwebscraping(data): Observable<any> {
    return this.httpService.post1(this.url + '/webScrape/getwebscripe' + data, null, {
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  }

  getwebscrapingsite(data): Observable<any> {
    return this.httpService.get(this.url + '/webScrape/getalluserscrapedsite' + data, null, {
      headers: new HttpHeaders().set("token", localStorage.getItem("token")),
      observe: 'response'
    });
  }
}