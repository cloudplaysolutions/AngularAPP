import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiUrl = 'https://api-server.illpeoplemusic.com/api/v2';

  constructor(private http: HttpClient) {}

  getHeaderData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/header`);
  }
} 