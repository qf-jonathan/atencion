import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(`${this.apiUrl}/api/login/`, body);
  }

  logout() {
    return this.http.get(`${this.apiUrl}/api/logout/`);
  }
}
