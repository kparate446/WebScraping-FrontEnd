"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../../environments/environment");
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.url;
    }
    HttpService.prototype.post = function (url, data, tokenRequired, headerOption) {
        if (tokenRequired === void 0) { tokenRequired = false; }
        if (headerOption === void 0) { headerOption = null; }
        var httpoption = this.httpheader();
        console.log(tokenRequired && headerOption);
        return this.httpClient.post(this.baseUrl + url, data, tokenRequired && httpoption);
    };
    HttpService.prototype.get = function (url, tokenRequired, headerOption) {
        if (tokenRequired === void 0) { tokenRequired = false; }
        if (headerOption === void 0) { headerOption = null; }
        var httpoption = this.httpheader();
        console.log(tokenRequired && headerOption);
        return this.httpClient.get(this.baseUrl + url, tokenRequired && httpoption);
    };
    HttpService.prototype.put = function (url, data, tokenRequired, headerOption) {
        if (tokenRequired === void 0) { tokenRequired = false; }
        if (headerOption === void 0) { headerOption = null; }
        var httpoption = this.httpheader();
        console.log(tokenRequired && headerOption);
        return this.httpClient.put(this.baseUrl + url, data, tokenRequired && httpoption);
    };
    HttpService.prototype["delete"] = function (url, tokenRequired, headerOption) {
        if (tokenRequired === void 0) { tokenRequired = false; }
        if (headerOption === void 0) { headerOption = null; }
        var httpoption = this.httpheader();
        console.log(tokenRequired && headerOption);
        return this.httpClient["delete"](this.baseUrl + url, tokenRequired && httpoption);
    };
    HttpService.prototype.httpheader = function () {
        var token = localStorage.getItem("token");
        var options = {
            headers: new http_1.HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'content-Type': 'application/json'
            })
        };
        return options;
    };
    HttpService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
