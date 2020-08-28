"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(HttpService, http) {
        this.HttpService = HttpService;
        this.http = http;
        this.url = environment_1.environment.url;
    }
    UserService.prototype.login = function (data) {
        return this.HttpService.post(this.url + '/user/login', data);
    };
    UserService.prototype.forgotpassword = function (data) {
        return this.HttpService.post(this.url + '/user/forgotpassword', data);
    };
    UserService.prototype.resetpassword = function (data) {
        return this.HttpService.post(this.url + '/user/resetpassword', data);
    };
    UserService.prototype.registration = function (data) {
        return this.HttpService.post(this.url + '/user/register', data);
    };
    UserService.prototype.addwebscraping = function (data) {
        return this.HttpService.post(this.url + '/webScrape/addwebscripe', data);
    };
    UserService.prototype.getwebscraping = function (data) {
        return this.http.post(this.url + '/webScrape/getwebscripe', data, {
            headers: new http_1.HttpHeaders().set("jwt_token", localStorage.getItem("token")),
            observe: 'response'
        });
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
