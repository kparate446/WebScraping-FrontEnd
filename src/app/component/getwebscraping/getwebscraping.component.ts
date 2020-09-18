import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getwebscraping',
  templateUrl: './getwebscraping.component.html',
  styleUrls: ['./getwebscraping.component.scss']
})
export class GetwebscrapingComponent implements OnInit {
  webscraping: FormGroup;
  submitted = false;
  hide;
  data = "";

  constructor(private getwebscrapingservice: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.webscraping = this.formBuilder.group({
      filePath: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', [Validators.required]]
    });
  }
  webscrapingForm() {
    var data = this.webscraping.value.filePath;
    console.log(data);
    var encoded = encodeURIComponent(data);
    console.log(encoded);
    this.getwebscrapingservice.getwebscraping("?filePath=" + encoded).subscribe(response => {
      console.log("Get Webscraping data");
      console.log(response.body.data);
      this.data = response.body.data;
      window.alert("Get Webscraping data Successfully");
    }, error => {
      console.log("Get Webscraping data response", error);
    })
  }
}