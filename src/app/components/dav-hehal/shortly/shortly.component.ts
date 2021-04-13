import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

declare var require: any;

@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: ['./shortly.component.css']
})
export class ShortlyComponent implements OnInit {
  @Input() inputprop;
  formdata: any;
  counter = 0;
  ngfor: any[] = [];
  finaldata: any[] = [];
  addanother: boolean = false;
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    console.log("dsdsds");
    this.formdata = new FormGroup({
      phonenumber1: new FormControl(),
      phonenumber2: new FormControl(),
    });

    console.log(this.formdata);
  }
  Add() {
    this.ngfor.push(this.counter);
    this.addanother = true;
    this.counter++;

  }
  save(data) {
    this.finaldata.push(data);
    console.log(data);
  }
}
