import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addwebscraping',
  templateUrl: './addwebscraping.component.html',
  styleUrls: ['./addwebscraping.component.scss']
})
export class AddwebscrapingComponent implements OnInit {
  addwebscrapingdata: FormGroup;
  submitted = false;

  constructor(private addwebscrapingservice: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addwebscrapingdata = this.formBuilder.group({
      addwebscraping: ['', [Validators.required, Validators.minLength(5)]],
      format: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', [Validators.required]]
    });
  }
  get f() { return this.addwebscrapingdata.controls; }

  webscrapingForm() {
    var data = this.addwebscrapingdata.value.addwebscraping;
    var format = this.addwebscrapingdata.value.format;
    var encoded = encodeURIComponent(data);
    this.addwebscrapingservice.addwebscraping("?url=" + encoded + "&format=" + format).subscribe(response => {
      window.alert("Add Webscraping data Successfully");
      console.log("Add Webscraping data");
    }, error => {
      console.log("Add Webscraping data response", error);
    })
  }
}