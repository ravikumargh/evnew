import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  constructor(private router: Router) { }

  userlists = [
  
    {
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },

    {
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },{
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },

    {
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },{
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },

    {
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },{
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },

    {
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },{
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },

    {
      "VehicleName": "Hyndai",
      "OwnerName": "Rakesh",
      "phone": "9972338280",
      "location": "Mysore",
      "status": "cells"
    },
   
  ];

  openSummary(user:any) {
    console.log(user)
    this.router.navigate(['/Summary'])
  }

}
