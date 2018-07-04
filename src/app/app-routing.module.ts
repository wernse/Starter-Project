import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  // {
  //   path: '**', redirectTo: ''
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
