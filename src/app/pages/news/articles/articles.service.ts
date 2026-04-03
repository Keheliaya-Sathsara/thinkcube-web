import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Article } from './articles.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private dataUrl = 'assets/data/Articles.json';
  
  constructor(private http: HttpClient) {}
  
  getArticles(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}

