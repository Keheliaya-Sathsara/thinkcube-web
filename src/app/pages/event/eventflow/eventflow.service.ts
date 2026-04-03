import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EventflowService {
  private dataUrl = 'assets/data/eventflow.json';
  
  constructor(private http: HttpClient) {}
  
  getEventflow(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
