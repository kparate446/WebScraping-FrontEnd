import { Injectable } from '@angular/core';
import {HttpService} from '../http_services/http.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url;
  constructor(public HttpService: HttpService) { }

  login(data){
    return this.HttpService.post(this.url+ '/user/login', data);
  }
}
