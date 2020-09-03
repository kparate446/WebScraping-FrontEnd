import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getwebscraping',
  templateUrl: './getwebscraping.component.html',
  styleUrls: ['./getwebscraping.component.scss']
})
export class GetwebscrapingComponent implements OnInit {
  webscraping: FormGroup;
  submitted = false;
  hide;
 
  constructor(private getwebscrapingservice: UserService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit(): void {
    this.webscraping = this.formBuilder.group({
      filePath: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  webscrapingForm() {
      this.getwebscrapingservice.getwebscraping("?filePath="+this.webscraping.value).subscribe(response => {
      console.log("Get Webscraping data");
      console.log(response)
      window.alert("Get Webscraping data Successfully");
    }, error => {
      console.log("Get Webscraping data response", error);
    })
  }
}