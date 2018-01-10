import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(public auth:AuthService) {
     
   }

  ngOnInit() {
    
  }

}
