import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Profile} from './core-api';
import {NavTab} from "./api";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  profile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/api/profile/`);
  }

  navTabs(): Observable<NavTab[]> {
    return this.http.get<NavTab[]>(`${this.apiUrl}/api/nav_tabs/`);
    /*return of<NavTab[]>([
      {id: 1, name: 'Ambiente 1', type: ''},
      {id: 2, name: 'Ambiente 2', type: ''},
      {id: 3, name: 'Ambiente 3', type: ''}
    ]);*/
  }
}
