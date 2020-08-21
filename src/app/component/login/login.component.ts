import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  hide;

  constructor(private loginservice: UserService,
        private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', [Validators.required]]
    });
  }
  loginForm() {
    this.loginservice.login(this.login.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log("User Login");
      console.log(response)
      window.alert("User Logged-in Successfully");
    }, error => {
      console.log("login response", error);
    })
  }
}