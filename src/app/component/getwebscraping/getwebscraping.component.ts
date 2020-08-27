import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-getwebscraping',
  templateUrl: './getwebscraping.component.html',
  styleUrls: ['./getwebscraping.component.scss']
})
export class GetwebscrapingComponent implements OnInit {
  webscraping: FormGroup;
  submitted = false;
  hide;

  constructor(private addwebscrapingservice: UserService,
        private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.webscraping = this.formBuilder.group({
         type: ['', [Validators.required]]
    });
  }
  webscrapingForm() {
      
  }
}