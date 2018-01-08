import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  message: any;
  subscription: Subscription;
  constructor(private data: DataService) {  
    this.message="no message";
    this.subscription = this.data.getTreatment().subscribe(message =>{
      this.message = message;
    //  alert(this.message+" !!!!!!");
      })

  }

  ngOnInit() {
  }
show(){
  alert(this.message);
}
}
