import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Cell } from 'src/app/entity/cell';
import { Detail } from 'src/app/entity/detail';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  data: any;
  details: Detail[] = [];
  detail: Detail = new Detail();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data:', this.data);
        this.processDetails();
        this.detail = this.details[0];
        this.recursiveCall();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  recursiveCall(){
    this.details.forEach((element, index) => {
      console.log(element);
      setTimeout(() => {
        this.detail = this.details[index];
        console.log('details ' + index, this.details); // No error
      }, index * 3000);
    });
    setTimeout(() => {
      this.recursiveCall();
    }, this.details.length * 3000);
  }

  processDetails() {
    this.data.Items.forEach((item: any) => {
      console.log('item:', item);
      const detail = new Detail();
      detail.charging = item.device_data.M.charging.M.value.S;
      detail.collectionTime = item.device_data.M.collectionTime.M.value.S;
      detail.cycleCount = item.device_data.M.cycleCount.M.value.S;
      detail.discharging = item.device_data.M.discharging.M.value.S;
      detail.driveMode = item.device_data.M.driveMode.M.value.S;
      detail.fullCapacity = item.device_data.M.fullCapacity.M.value.S;
      detail.latitude = item.device_data.M.latitude.M.value.S;
      detail.longitude = item.device_data.M.longitude.M.value.S;
      detail.odometer = item.device_data.M.odometer.M.value.S;
      detail.packCurrent = item.device_data.M.packCurrent.M.value.S;
      detail.packVoltage = item.device_data.M.packVoltage.M.value.S;
      detail.remainingCapacity = item.device_data.M.remainingCapacity.M.value.S;
      detail.soc = item.device_data.M.soc.M.value.S;
      detail.speed = item.device_data.M.speed.M.value.S;
      detail.temp = item.device_data.M.temp.M.value.S;
      detail.vehicleIdentifier = item.device_data.M.vehicleIdentifier.S;
      detail.vehicleStatus = item.device_data.M.vehicleStatus.M.value.S;
      detail.cells = [];
      this.processCells(detail, item.device_data.M.cellsData.L)
      this.details.push(detail);
    });
    console.log('Details', this.details);
  }
  processCells(details: any, cellsData: any) {
    cellsData.forEach((element: any) => {
      const cell = new Cell();
      cell.id = element.M.id.M.value.S;
      cell.status = element.M.status.BOOL;
      cell.voltage = element.M.voltage.M.value.S;
      details.cells.push(cell);
    });
  }


}