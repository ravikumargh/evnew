import { Component } from '@angular/core';
import { single } from './data';
import { BaseType } from 'd3-selection';
import { ScaleLinear, ScaleBand } from 'd3-scale';
import { CurveFactory } from 'd3-shape';
import { ColorHelper } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Dashboard } from 'src/app/entity/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {

  single: any[] | undefined;
  view: [number, number] = [1200, 300];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  dashboard = new Dashboard();

  colorScheme: Color = {
    domain: ['#0057ff', '#fd0188', '#C7B42C', '#AAAAAA'],
    name: 'vehicle', // Example property for Color type
    selectable: true, // Example property for Color type
    group: ScaleType.Ordinal // Example property for Color type
  };
  errors: { errorname: string; boxshdw: string; count: number; icon: string; iconcolor: string; }[];

  constructor() {
    Object.assign(this, { single });
    this.dashboard.total = 100;
    this.dashboard.healthy = 20;
    this.dashboard.nosignal = 30;
    this.dashboard.defective = 40;

    this.dashboard.cells = 10;
    this.dashboard.soc = 10;
    this.dashboard.voltage = 10;
    this.dashboard.current = 10;
    this.dashboard.temperature = 10;
    this.dashboard.cycles = 10;

    // this.single[0].value = 20;
    this.errors = [
      {
        "errorname": "cells",
        "boxshdw":"bx_s1",
        "count": this.dashboard.cells,
        "icon": "icon-icon-Cells",
        "iconcolor":"icon_1"
      },
  
      {
        "errorname": "SOC",
        "boxshdw":"bx_s2",
        "count": this.dashboard.soc,
        "icon": "icon-icon-Charging",
        "iconcolor":"icon_1"
      },
  
      {
        "errorname": "Voltage",
        "count": this.dashboard.voltage,
        "boxshdw":"bx_s1",
        "icon": "icon-icon-Voltage",
        "iconcolor":"icon_2"
      },
  
      {
        "errorname": "Current",
        "count": this.dashboard.current,
        "boxshdw":"bx_s2",
        "icon": "icon-icon-Current",
        "iconcolor":"icon_1"
      },
  
      {
        "errorname": "Temperature",
        "count": this.dashboard.temperature,
        "boxshdw":"bx_s1",
        "icon": "icon-icon-Temparature",
        "iconcolor":"text-danger"
      },
  
      {
        "errorname": "Cycles",
        "count": this.dashboard.cycles,
        "boxshdw":"bx_s2",
        "icon": "icon-icon-Cycle",
        "iconcolor":"text-success"
      },
  
      
  
    ]
    single[0].value = this.dashboard.healthy;
    single[1].value = this.dashboard.defective;
    single[2].value = this.dashboard.nosignal;
    console.log(single);
  }


  
}
