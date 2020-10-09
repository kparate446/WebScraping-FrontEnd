import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getwebscrapingsite',
  templateUrl: './getwebscrapingsite.component.html',
  styleUrls: ['./getwebscrapingsite.component.scss']
})
export class GetwebscrapingsiteComponent implements OnInit {
  webscraping: FormGroup;
  submitted = false;
  hide;
  data = "";
  printdata: string = '<strong></strong>';

  constructor(private getwebscrapingsiteservice: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.webscraping = this.formBuilder.group({
      filePath: ['', [Validators.required, Validators.minLength(5)]],
      format: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', [Validators.required]]
    });
  }

  getwebscrapingForm() {
    var format = this.webscraping.value.format;
    console.log(format);
    this.getwebscrapingsiteservice.getwebscrapingsite("?format=" + format).subscribe(response => {
      console.log("Get WebscrapingSite data");
      this.data = response.body.data;
      console.log(this.data);
    }, error => {
      console.log("Get WebscrapingSite data response", error);
    })
  }

  webscrapingForm() {
    var data = this.webscraping.value.filePath;
    console.log(data);
    var encoded = encodeURIComponent(data);
    console.log(encoded);
    this.getwebscrapingsiteservice.getwebscraping("?filePath=" + encoded).subscribe(response => {
      console.log("Get Webscraping data");
      this.printdata = response.body.data;
      console.log(this.printdata);
    }, error => {
      console.log("Get Webscraping data response", error);
    })
  }
}