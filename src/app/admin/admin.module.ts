import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SummaryComponent,
    UserlistComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,

  ],

  exports: [
    DashboardComponent,
    SummaryComponent
  ],
})
export class AdminModule { }
