import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserlistComponent } from './userlist/userlist.component';
import { GmapComponent } from './gmap/gmap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SummaryComponent,
    UserlistComponent,
    GmapComponent,
    PieChartComponent

  ],

  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    GoogleMapsModule,
    HttpClientModule

  ],

  exports: [
    DashboardComponent,
    SummaryComponent
  ],
})
export class AdminModule { }
