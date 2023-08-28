import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];
  genders: any[] = [];
  genderLookup: any[] = [];
  services: any[] = [];
  serviceLookup: any = [];
  mostVisitsPatient: any;

  apiBaseUrl: string = 'http://127.0.0.1:8000';

  constructor(private patientService: PatientService, private http: HttpClient) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe((response: any[]) => {
      this.patients = response;
    });

    this.http.get<any[]>(`${this.apiBaseUrl}/api/genders`).subscribe(response => {
      this.genders = response;
      this.genders.forEach(gender => {
        this.genderLookup[gender.id] = gender.name;
      });
    });

    this.http.get<any[]>(`${this.apiBaseUrl}/api/services`).subscribe(response => {
      this.services = response;
      this.services.forEach(service => {
        this.serviceLookup[service.id] = service.name;
      });

      this.patients.forEach(patient => {
        patient.service_name = this.serviceLookup[patient.service_id];
      });

      this.mostVisitsPatient = this.patients.reduce((prev, current) =>
        prev.services[0]?.service_count > current.services[0]?.service_count ? prev : current
      );
    });
  }

  isMostVisits(patient: any): boolean {
    return patient.id === this.mostVisitsPatient.id;
  }
}
