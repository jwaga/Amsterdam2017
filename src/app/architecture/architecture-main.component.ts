import { Component, OnInit } from '@angular/core';

import { Patient } from "./patient.model";
import { PatientService } from "./patient.service";

@Component({
  selector: 'app-architecture-main',
  templateUrl: './architecture-main.component.html',
  styleUrls: ['./architecture-main.component.css']
})
export class ArchitectureMainComponent implements OnInit {

  model: Patient;
  modelDate: Date;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatient()
      .then((result: Patient) => {
        this.model = result;
        this.modelDate = new Date();
      });
  }

}
