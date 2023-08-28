import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientService } from '../patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  patient = {
      name: '',
      date_of_birth: '',
      gender_id: '',
      service_id: [],
      comments: ''
  };

  constructor(private patientService: PatientService, private snackBar: MatSnackBar) {}

  savePatient(){
    this.patient.gender_id = this.patient.gender_id;
    //this.patient.service_id = [this.patient.service_id];

    this.patientService.savePatient(this.patient).subscribe(response => {
      console.log('Saving patient:', this.patient);
      console.log('Successfully saved patient records', response);

      this.patient.name = '';
      this.patient.date_of_birth = '';
      this.patient.gender_id = '';
      this.patient.service_id = [];
      this.patient.comments = '';
      
      this.snackBar.open('Patient records successfully saved', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
      
    });
  }
}
