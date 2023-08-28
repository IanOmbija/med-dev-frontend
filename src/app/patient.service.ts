import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiBaseUrl = 'http://127.0.0.1:8000/api/patients';

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get<any[]>(this.apiBaseUrl);
  }

  savePatient(patient: any) {
    return this.http.post(this.apiBaseUrl, patient);
  }
}
