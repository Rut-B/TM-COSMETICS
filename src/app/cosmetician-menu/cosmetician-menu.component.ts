import { Component, OnInit } from '@angular/core';
import {NavComponentComponent } from '../nav-component/nav-component.component';
import {NavService} from '../nav.service'
@Component({
  selector: 'app-cosmetician-menu',
  templateUrl: './cosmetician-menu.component.html',
  styleUrls: ['./cosmetician-menu.component.scss']
})
export class CosmeticianMenuComponent implements OnInit {

  constructor(public navService:NavService) { }

  ngOnInit() {
  }

}
