import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

declare var require: any;

@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: ['./shortly.component.css']
})
export class ShortlyComponent implements OnInit {

  formdata: any;
  addanother: boolean = false;
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      phonenumber1: new FormControl(),
      phonenumber2: new FormControl(),
    });

    console.log(this.formdata);
  }
  Add() {
    this.addanother = true;
  }
  save(data) {
    console.log(data);
  }
}
