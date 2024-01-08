import { Component } from '@angular/core';
import { single } from './data';
import { BaseType } from 'd3-selection';
import { ScaleLinear, ScaleBand } from 'd3-scale';
import { CurveFactory } from 'd3-shape';
import { ColorHelper } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Dashboard } from 'src/app/entity/dashboard';
import { DataService } from 'src/app/data.service';
import { ErrorConfig } from 'src/app/entity/errorConfig';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {

  single: any[] | undefined;
  view: [number, number] = [800, 300];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  
  dashboard = new Dashboard();
  errorConfig = new ErrorConfig();
  
  data: any;
  chartdata: any;
  userdata: any;

  colorScheme: Color = {
    domain: ['#0057ff', '#fd0188', '#C7B42C', '#AAAAAA'],
    name: 'vehicle', // Example property for Color type
    selectable: true, // Example property for Color type
    group: ScaleType.Ordinal // Example property for Color type
  };
  errors: { errorname: string; boxshdw: string; count: number; icon: string; iconcolor: string; }[];

  constructor(private dataService: DataService) {
    this.getData();
    this.getChartData();
    this.getUserData();
    Object.assign(this, { single });
    this.dashboard.total = 0;
    this.dashboard.healthy = 1;
    this.dashboard.nosignal = 1;
    this.dashboard.defective = 0;

    this.dashboard.cells = 0;
    this.dashboard.soc = 0;
    this.dashboard.voltage = 0;
    this.dashboard.current = 0;
    this.dashboard.temperature = 0;
    this.dashboard.cycles = 0;

    // this.single[0].value = 20;
    this.errors = [
      {
        "errorname": "cells",
        "boxshdw": "bx_s1",
        "count": this.dashboard.cells,
        "icon": "icon-icon-Cells",
        "iconcolor": "icon_1"
      },

      {
        "errorname": "SOC",
        "boxshdw": "bx_s2",
        "count": this.dashboard.soc,
        "icon": "icon-icon-Charging",
        "iconcolor": "icon_1"
      },

      {
        "errorname": "Voltage",
        "count": this.dashboard.voltage,
        "boxshdw": "bx_s1",
        "icon": "icon-icon-Voltage",
        "iconcolor": "icon_2"
      },

      {
        "errorname": "Current",
        "count": this.dashboard.current,
        "boxshdw": "bx_s2",
        "icon": "icon-icon-Current",
        "iconcolor": "icon_1"
      },

      {
        "errorname": "Temperature",
        "count": this.dashboard.temperature,
        "boxshdw": "bx_s1",
        "icon": "icon-icon-Temparature",
        "iconcolor": "text-danger"
      },

      {
        "errorname": "Cycles",
        "count": this.dashboard.cycles,
        "boxshdw": "bx_s2",
        "icon": "icon-icon-Cycle",
        "iconcolor": "text-success"
      },



    ]
    
  }
  getChartData(): void {
    this.dataService.getChartData().subscribe(
      (response) => {
        this.chartdata = response;
        console.log('Data:', this.chartdata);
        this.validateChartData();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  validateChartData() {
    
    this.chartdata[0].value = this.dashboard.healthy;
    this.chartdata[1].value = this.dashboard.defective;
    this.chartdata[2].value = this.dashboard.nosignal;
    console.log(this.chartdata);
  }
  getData(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data:', this.data);
        this.validateData();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  validateData() {
     
    this.data.Items.forEach((item: any, index: number) => {
      this.dashboard.total += 1;
      var errorCountBefore = 0;
      this.errors.forEach(error =>{
        errorCountBefore +=error.count;
      })
      this.validateError(item.device_data.M.soc, 'SOC', this.errorConfig.soc);
      this.validateError(item.device_data.M.packVoltage, 'Voltage', this.errorConfig.voltage);
      this.validateError(item.device_data.M.packCurrent, 'Current', this.errorConfig.current);

      this.validateErrorTemperature(item.device_data.M.temp, 'Temperature', this.errorConfig.temperature);
      this.validateErrorCycles(item.device_data.M.cycleCount, 'Cycles', this.errorConfig.cycles);
      this.validateErrorCells(item.device_data.M.cellsData.L, 'cells', this.errorConfig.cells);
      var errorCountAfter = 0;
      this.errors.forEach(error =>{
        errorCountAfter +=error.count;
      })
      if (errorCountBefore != errorCountAfter) {
        this.dashboard.defective += 1;
        
      }
    })
    // this.dashboard.total = this.dashboard.healthy + this.dashboard.defective + this.dashboard.nosignal

     
  }
  getUserData(): void {
    this.dataService.getUserData().subscribe(
      (response) => {
        this.userdata = response;
        console.log('User Data:', this.userdata);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


  validateError(item: any, errorType: string, config: number) {
    if (item.M.value.S == config) {
      let errorsItem = this.errors.find(item => item.errorname == errorType);
      if (errorsItem) {
        errorsItem.count += 1;
      }
    }
  }
  validateErrorTemperature(item: any, errorType: string, config: any) {
    if (item.M.value.S > config) {
      let errorsItem = this.errors.find(item => item.errorname == errorType);
      if (errorsItem) {
        errorsItem.count += 1;
      }
    }
  }
  validateErrorCycles(item: any, errorType: string, config: any) {
    if (item.M.value.S > config) {
      let errorsItem = this.errors.find(item => item.errorname == errorType);
      if (errorsItem) {
        errorsItem.count += 1;
      }
    }
  }
  validateErrorCells(items: any, errorType: string, config: any) {
    items.forEach((item: any) => {
      // console.log(item.M.voltage.M.value.S);

      if (item.M.voltage.M.value.S == config.toString()) {
        let errorsItem = this.errors.find(item => item.errorname == errorType);
        if (errorsItem) {
          errorsItem.count += 1;
        }
        console.log('Exiting loop');
        return;
      }
    });
    console.log('After loop');
  }

}
