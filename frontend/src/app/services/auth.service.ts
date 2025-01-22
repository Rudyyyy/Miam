import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Service accessible globalement
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login'; // Remplace par l'URL de ton backend

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { login, password });
  }
}
