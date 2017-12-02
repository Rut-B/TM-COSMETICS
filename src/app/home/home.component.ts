import { Component, OnInit } from '@angular/core';
import {NavComponentComponent } from '../nav-component/nav-component.component';
import {NavService} from '../nav.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public navService:NavService) {
    
   }

  ngOnInit() {
  }

}
