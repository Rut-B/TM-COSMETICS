import { Component, OnInit } from '@angular/core';
import { CalendarEvent, } from "angular-calendar";
import {  ChangeDetectionStrategy } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CalendarMessageService}from '../calendar-message.service';


@Component({
  selector: 'app-cosmetician-calendar',
  templateUrl: './cosmetician-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cosmetician-calendar.component.css']
})
export class CosmeticianCalendarComponent implements OnInit {
  message: any;
  subscription: Subscription;

 viewDate: Date;
 events: CalendarEvent[] = [];
  view: string = 'month'; 
  constructor(private messageService: CalendarMessageService) {
    this.viewDate=new Date(); 
    this.events=messageService.getMessage();
    
  }
   ngOnInit() {
  }
}
