import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { DataService } from 'src/app/data.service';
import { Dashboard } from 'src/app/entity/dashboard';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent{
  dashboard = new Dashboard();

  single: any[] | undefined;
  view: [number, number] = [700, 400];
  data: any;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dataService: DataService) {
    Object.assign(this, { single });
    this.getData();
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  getData(): void {
    this.dataService.getChartData().subscribe(
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
    
    this.data[0].value = 1;
    this.data[1].value = 1;
    this.data[2].value = 1;
    console.log(this.data);
  }
}