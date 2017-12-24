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
export class CosmeticianCalendarComponent implements OnInit,OnDestroy {
  message: any;
  subscription: Subscription;

 viewDate: Date;
 events: CalendarEvent[] = [];
  view: string = 'month'; 
  constructor(private messageService: CalendarMessageService) {
   // this.viewDate = new Date();
    this.viewDate=new Date(); 
    this.events=messageService.getMessage();
    /*let event: CalendarEvent = {
     // start : new Date(),
     start:new Date(),
     // end: new Date(),
      title: "test33",
      color: {
        primary: "#00FF00",
        secondary: "#afafaf"
      }   
    }; 
    this.events.push(event);*/
      // subscribe to home component messages
    /*this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message;
   this.viewDate=new Date();
   let event: CalendarEvent = {
    // start : new Date(),
    start:new Date(),
    // end: new Date(),
     title: "test33",
     color: {
       primary: "#00FF00",
       secondary: "#afafaf"
     }   
   };
   this.events.push(event);
  });*/
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

  ngOnInit() {
  }
}
