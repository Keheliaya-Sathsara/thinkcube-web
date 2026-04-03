import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { environment } from './environment';

export interface ContactFormData {
  fullName: string;
  email: string;
  selectedCountry: string;
  phoneNumber: string;
  message: string;
  agreeTerms: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

submitContactForm(formData: ContactFormData): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Format phone number with country code
  const formattedData = {
    ...formData,
    phoneNumber: formData.selectedCountry + ' ' + formData.phoneNumber
  };

  return this.http.post(`${this.apiUrl}/contact`, formattedData, { headers }).pipe(
    tap((response) => console.log('API response:', response)),
    catchError((error) => {
      console.error('API Error:', error);
      if (error.status === 0) {
        return throwError(() => new Error('Could not connect to the server. Please check your network connection.'));
      } else {
        return throwError(() => error);
      }
    }),
  );
}

  testApiConnection(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`).pipe(
      catchError((error) => {
        console.error('API connection test failed:', error);
        return throwError(
          () => new Error('API server is not available. Check your server connection.'),
        );
      }),
    );
  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status) {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      }
    }

    console.error('API Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
