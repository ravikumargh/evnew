import { Cell } from "./cell";

export class Detail {
    id: number = 0;
    temp: number = 0;
    collectionTime: number = 0;
    odometer: number = 0;
    packVoltage: number = 0;
    soc: number = 0;
    latitude: number = 0;
    longitude: number = 0;
    charging: number = 0;
    speed: number = 0;
    driveMode: number = 0;
    vehicleIdentifier: string = '';
    discharging: number = 0;
    cycleCount: number = 0;
    packCurrent: number = 0;
    remainingCapacity: number = 0;
    fullCapacity: number = 0;
    vehicleStatus: boolean = true;
    cells: Cell[] = [];
}