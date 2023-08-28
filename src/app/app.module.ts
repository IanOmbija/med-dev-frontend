import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from './patient.service';
import { CustomDatePipe } from './custom-date.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MostVisitsDirective } from './most-visits.directive';

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientListComponent,
    CustomDatePipe,
    MostVisitsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSnackBarModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
