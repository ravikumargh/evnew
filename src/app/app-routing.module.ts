import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from './admin/dashboard/dashboard.component'
import{SummaryComponent}from './admin/summary/summary.component'

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'Summary', component: SummaryComponent },
    
    // Additional routes as needed
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
   
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }