import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword: FormGroup;
  submitted = false;
  hide;

  constructor(private resetpasswordservice: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', [Validators.required]]
    });
  }
  resetPasswordForm() {
    this.resetpasswordservice.resetpassword(this.resetpassword.value).subscribe(response => {
      localStorage.getItemsetItem('token', response['data']);
    }, error => {
      console.log("Reset password response", error);
    })
  }
}