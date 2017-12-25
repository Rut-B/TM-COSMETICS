import { Component, OnInit } from '@angular/core';
import { CalendarEvent, } from "angular-calendar";
import {CalendarMessageService}from '../calendar-message.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: string = 'month';
  
   viewDate: Date = new Date();
  
    events: CalendarEvent[] = [];
  
    clickedDate: Date;

  constructor(private messageService:CalendarMessageService) { 
   this.viewDate = new Date();  
   this.events=messageService.getMessage();
  } 
  dayClicked(){
  this.addEvent(this.clickedDate);
  }

  addEvent(date){
    this.viewDate = new Date(); 
    let event: CalendarEvent = {
      // start : new Date(),
      start:new Date(date),
      // end: new Date(),
       title: "appointment",
       color: {
         primary: "#00FF00",
         secondary: "#afafaf"
       }   
     }; 
     this.messageService.sendMessage(event);
     this.events=this.messageService.getMessage();  
     this.events.forEach(item=>alert(item.start));
    // alert(this.format(date));  
  }

  ngOnInit() {
  }
format(curr){
  var dd = curr.getDate();
var mm = curr.getMonth()+1; //January is 0!

var yyyy =curr.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = mm+'/'+dd+'/'+yyyy;
return today;
}
}