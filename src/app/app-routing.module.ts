import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddwebscrapingComponent } from './component/addwebscraping/addwebscraping.component';
import { GetwebscrapingComponent } from './component/getwebscraping/getwebscraping.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  }, {
    path: 'resetpassword',
    component: ResetpasswordComponent
  }, {
    path: 'register',
    component: RegistrationComponent
  }, {
    path: '',
    component: DashboardComponent, children: [

      { path: '', redirectTo: 'addwebscraping', pathMatch: 'full' },
          { path: 'addwebscraping', component: AddwebscrapingComponent },
      { path: 'getwebscrapingdata', component: GetwebscrapingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }