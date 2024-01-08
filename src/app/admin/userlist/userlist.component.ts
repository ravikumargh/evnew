import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  userlists: any;

  constructor(private dataService: DataService, private router: Router) {
    this.getUserData();
  }
  getUserData(): void {
    this.dataService.getUserData().subscribe(
      (response) => {
        this.userlists = response;
        console.log('User Data:', this.userlists);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
 

  openSummary(user: any) {
    console.log(user)
    this.router.navigate(['/Summary'])
  }

}
