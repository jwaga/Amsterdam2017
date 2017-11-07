import { Injectable } from "@angular/core";

import { Patient } from "./patient.model";

Injectable()
export class PatientService {

    constructor() { }

    getPatient(): Promise<Patient> {
        return Promise.resolve(new Patient('Joe', 'Black', false)); // This would go to backend
    }
}