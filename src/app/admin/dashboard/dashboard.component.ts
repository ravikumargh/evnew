import { Component } from '@angular/core';
import { single } from './data';
import { BaseType } from 'd3-selection';
import { ScaleLinear, ScaleBand } from 'd3-scale';
import { CurveFactory } from 'd3-shape';
import { ColorHelper } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

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

  colorScheme: Color = {
    domain: ['#0057ff', '#fd0188', '#C7B42C', '#AAAAAA'],
    name: 'vehicle', // Example property for Color type
    selectable: true, // Example property for Color type
    group: ScaleType.Ordinal // Example property for Color type
  };

  constructor() {
    Object.assign(this, { single });
  }

  errors = [
    {
      "errorname": "cells",
      "boxshdw":"bx_s1",
      "count": "10",
      "icon": "icon-icon-Cells",
      "iconcolor":"icon_1"
    },

    {
      "errorname": "SOC",
      "boxshdw":"bx_s2",
      "count": "60",
      "icon": "icon-icon-Charging",
      "iconcolor":"icon_1"
    },

    {
      "errorname": "Voltage",
      "count": "12",
      "boxshdw":"bx_s1",
      "icon": "icon-icon-Voltage",
      "iconcolor":"icon_2"
    },

    {
      "errorname": "Current",
      "count": "15",
      "boxshdw":"bx_s2",
      "icon": "icon-icon-Current",
      "iconcolor":"icon_1"
    },

    {
      "errorname": "Tempata",
      "count": "60",
      "boxshdw":"bx_s1",
      "icon": "icon-icon-Temparature",
      "iconcolor":"text-danger"
    },

    {
      "errorname": "Cycles",
      "count": "10",
      "boxshdw":"bx_s2",
      "icon": "icon-icon-Cycle",
      "iconcolor":"text-success"
    },

    

  ]

  
}
