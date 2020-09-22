import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword: FormGroup;
  submitted = false;
  hide;
  token: string;

  constructor(private resetpasswordservice: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
    // localStorage.setItem('token',this.token);
    this.resetpassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', [Validators.required]]
    });
  }
  get f(){return this.resetpassword.controls;}

  resetPasswordForm() {
    console.log('values in login form', this.resetpassword.value);
    this.resetpasswordservice.resetpassword(this.resetpassword.value).subscribe(response => {
      localStorage.setItem('token', this.token);
      console.log("Reset response",response);
      window.alert("Reset Password Successfully");
    }, error => {
      console.log("Reset password response", error);
    })
  }
}