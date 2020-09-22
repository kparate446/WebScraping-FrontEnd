import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;
  submitted = false;
  hide;

  constructor(private registrationservice:UserService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      middleName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      cofirmPasword: ['', [Validators.required, Validators.minLength(5)]],
      phoneNo:['',[Validators.required,Validators.maxLength(10)]],
      type:['',[Validators.required]]
    });
  }
 get f() { return this.registration.controls; }
 
  registrationform(){
    console.log("User Registration");
    this.registrationservice.registration(this.registration.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log(response)
      window.alert("User Registration Successfully");
    }, error => {
      console.log("Registration response", error);
      window.alert("User Registration Successfully");
      this.router.navigate(['/login'])
    })
  }
}