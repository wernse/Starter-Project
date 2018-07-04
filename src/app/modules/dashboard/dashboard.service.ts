import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
}
