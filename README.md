
# MedBook Dev Frontend Setup Guide

This guide provides step-by-step instructions on setting up and running the MedBook Dev Frontend, an Angular application that interacts with a Laravel backend to manage patient records.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)


## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Angular CLI: Install using the following command:
  ```
  npm install -g @angular/cli
  ```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/IanOmbija/medbook-dev-frontend.git
   cd medbook-dev-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

1. Open the `src/app/patient.seervice.ts` and `src/app/patient-list.component.ts` file.

2. Update the `apiBaseUrl` with the URL of your MedBook Dev Backend API. For example:
   ```typescript
   export class PatientService = {
     private apiBaseUrl = 'http://127.0.0.1:8000/api/patients';
   };
   ```

## Running the Application

Run the following command to start the development server and open the application in your default web browser:

```
ng serve
```

The application should be accessible at `http://localhost:4200`.

## Usage

- Upon opening the application, you will be able to view a list of patients and their information.
- Use the provided form to add new patients and their details.
- The table rows will be highlighted if the patient has the most visits.



---

