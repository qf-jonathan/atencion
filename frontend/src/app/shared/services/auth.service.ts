import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Auth} from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const body = {
      username,
      password
    };
    return this.http.post<Auth>(`${this.apiUrl}/api/login/`, body);
  }

  logout() {
    return this.http.get(`${this.apiUrl}/api/logout/`);
  }
}
