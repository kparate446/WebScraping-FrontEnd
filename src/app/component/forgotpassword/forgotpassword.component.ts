import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  ForgotPassword: FormGroup;
  submitted = false;

  constructor(
    private forgotpasswordservice:UserService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.ForgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      type:['',[Validators.required]]
      });
  }
  forgotPasswordForm(){
    console.log("Sent the token in mail");
    this.forgotpasswordservice.forgotpassword(this.ForgotPassword.value).subscribe(response => {
      localStorage.setItem('token', response['data']);  
      window.alert("User Logged-in Successfully");
    }, error => {
      console.log("Forgot password response", error);
    })
  }
}