import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Profile} from './core-api';
import {Area, Category, Detail, DetailPreparation, Invoice, NavTab} from './api';
import {Observable, of} from 'rxjs';

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
  }

  tableList() {
    return this.http.get(`${this.apiUrl}/api/ambience/table/`);
  }

  area(id: string): Observable<Area> {
    return this.http.get<Area>(`${this.apiUrl}/api/ambience/area/${id}/`);
  }

  menu(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/api/menu/category/`);
  }

  invoiceNew(invoice: Invoice) {
    return this.http.post(`${this.apiUrl}/api/order/invoice_save/`, invoice);
  }

  invoiceUpdate(invoice: Invoice) {
    return this.http.patch(invoice.url, invoice);
  }

  invoiceRemove(invoice: Invoice) {
    return this.http.delete(`${this.apiUrl}/api/order/invoice_delete/${invoice.id}/`);
  }

  preparation(preparationId: string): Observable<DetailPreparation[]> {
    return this.http.get<DetailPreparation[]>(`${this.apiUrl}/api/ambience/preparation/${preparationId}/`);
  }

  detailUpdate(detail: DetailPreparation | Detail): Observable<DetailPreparation> {
    return this.http.patch<DetailPreparation>(detail.url, {'state': 'auto'});
  }
}
