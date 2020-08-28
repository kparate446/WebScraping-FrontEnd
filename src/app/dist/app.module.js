"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./component/login/login.component");
var forgotpassword_component_1 = require("./component/forgotpassword/forgotpassword.component");
var resetpassword_component_1 = require("./component/resetpassword/resetpassword.component");
var animations_1 = require("@angular/platform-browser/animations");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
var icon_1 = require("@angular/material/icon");
var http_1 = require("@angular/common/http");
var forms_2 = require("@angular/forms");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var divider_1 = require("@angular/material/divider");
var sidenav_1 = require("@angular/material/sidenav");
var registration_component_1 = require("./component/registration/registration.component");
var dashboard_component_1 = require("./component/dashboard/dashboard.component");
var list_1 = require("@angular/material/list");
var addwebscraping_component_1 = require("./component/addwebscraping/addwebscraping.component");
var getwebscraping_component_1 = require("./component/getwebscraping/getwebscraping.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                resetpassword_component_1.ResetpasswordComponent,
                forgotpassword_component_1.ForgotpasswordComponent,
                registration_component_1.RegistrationComponent,
                dashboard_component_1.DashboardComponent,
                addwebscraping_component_1.AddwebscrapingComponent,
                getwebscraping_component_1.GetwebscrapingComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                icon_1.MatIconModule,
                http_1.HttpClientModule,
                forms_2.FormsModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                divider_1.MatDividerModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
