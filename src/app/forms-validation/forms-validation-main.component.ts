import { Component, OnInit } from '@angular/core';

import { Patient } from "../architecture/patient.model";

@Component({
  selector: 'app-forms-validation-main',
  templateUrl: './forms-validation-main.component.html',
  styleUrls: ['./forms-validation-main.component.css']
})
export class FormsValidationMainComponent implements OnInit {

  model: Patient = new Patient('Joe', 'Black'); // we'll borrow the model from another module, it's not so nice, should be in shared

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.model = new Patient('Joe', 'Black', true);
  }

}
