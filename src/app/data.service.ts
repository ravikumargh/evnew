import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private apiUrl = 'https://era2889d3a.execute-api.ap-south-1.amazonaws.com/prod/getData';  
  private apiUrl = '/assets/data/data.json';
  private apiChartUrl = '/assets/data/chartdata.json';
  private apiUserUrl = '/assets/data/userdata.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getChartData(): Observable<any> {
    return this.http.get(this.apiChartUrl);
  }
  getUserData(): Observable<any> {
    return this.http.get(this.apiUserUrl);
  }
}
