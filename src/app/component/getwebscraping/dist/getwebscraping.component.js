"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetwebscrapingComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var GetwebscrapingComponent = /** @class */ (function () {
    function GetwebscrapingComponent(getwebscrapingservice, formBuilder, route, router) {
        this.getwebscrapingservice = getwebscrapingservice;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.token = localStorage.getItem('token');
    }
    GetwebscrapingComponent.prototype.ngOnInit = function () {
        this.webscraping = this.formBuilder.group({
            filePath: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]]
        });
    };
    GetwebscrapingComponent.prototype.webscrapingForm = function () {
        var _this = this;
        this.getwebscrapingservice.getwebscraping(this.webscraping.value).subscribe(function (response) {
            console.log(_this.token);
            console.log("Get Webscraping data");
            console.log(response);
            window.alert("Get Webscraping data Successfully");
        }, function (error) {
            console.log("Get Webscraping data response", error);
        });
    };
    GetwebscrapingComponent = __decorate([
        core_1.Component({
            selector: 'app-getwebscraping',
            templateUrl: './getwebscraping.component.html',
            styleUrls: ['./getwebscraping.component.scss']
        })
    ], GetwebscrapingComponent);
    return GetwebscrapingComponent;
}());
exports.GetwebscrapingComponent = GetwebscrapingComponent;
