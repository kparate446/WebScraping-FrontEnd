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
    function GetwebscrapingComponent(addwebscrapingservice, formBuilder) {
        this.addwebscrapingservice = addwebscrapingservice;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    GetwebscrapingComponent.prototype.ngOnInit = function () {
        this.webscraping = this.formBuilder.group({
            type: ['', [forms_1.Validators.required]]
        });
    };
    GetwebscrapingComponent.prototype.webscrapingForm = function () {
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
