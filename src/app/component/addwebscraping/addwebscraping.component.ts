import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addwebscraping',
  templateUrl: './addwebscraping.component.html',
  styleUrls: ['./addwebscraping.component.scss']
})
export class AddwebscrapingComponent implements OnInit {
  webscraping: FormGroup;
  submitted = false;
  hide;

  constructor(private addwebscrapingservice: UserService,
        private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.webscraping = this.formBuilder.group({
      addwebscraping: ['', [Validators.required, Validators.minLength(5)]],
      format: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', [Validators.required]]
    });
  }
  webscrapingForm() {
    this.addwebscrapingservice.addwebscraping(this.webscraping.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log("Add Webscraping data");
      console.log(response)
      window.alert("Add Webscraping data Successfully");
    }, error => {
      console.log("Add Webscraping data response", error);
    })
  }
}