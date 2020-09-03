"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddwebscrapingComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddwebscrapingComponent = /** @class */ (function () {
    function AddwebscrapingComponent(addwebscrapingservice, formBuilder) {
        this.addwebscrapingservice = addwebscrapingservice;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    AddwebscrapingComponent.prototype.ngOnInit = function () {
        this.webscraping = this.formBuilder.group({
            addwebscraping: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            format: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            type: ['', [forms_1.Validators.required]]
        });
    };
    AddwebscrapingComponent.prototype.webscrapingForm = function () {
        this.addwebscrapingservice.addwebscraping(this.webscraping.value).subscribe(function (response) {
            console.log("Add Webscraping data");
            console.log(response);
            window.alert("Add Webscraping data Successfully");
        }, function (error) {
            console.log("Add Webscraping data response", error);
        });
    };
    AddwebscrapingComponent = __decorate([
        core_1.Component({
            selector: 'app-addwebscraping',
            templateUrl: './addwebscraping.component.html',
            styleUrls: ['./addwebscraping.component.scss']
        })
    ], AddwebscrapingComponent);
    return AddwebscrapingComponent;
}());
exports.AddwebscrapingComponent = AddwebscrapingComponent;
