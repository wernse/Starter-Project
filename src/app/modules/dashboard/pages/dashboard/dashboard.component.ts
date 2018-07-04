import { DashboardHeader } from './../../models/dashboard-header.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headers: DashboardHeader;

  constructor(public router: Router) { }

  ngOnInit() {
    console.log('hello');
    this.headers = new DashboardHeader();
    this.headers.header = 'Header Test';
    this.headers.subHeader = 'Welcome to a SubHeader Test';
  }
}
