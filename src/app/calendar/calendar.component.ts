import { Component, OnInit } from '@angular/core';
import { CalendarEvent, } from "angular-calendar"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

 viewDate: Date;
  events: CalendarEvent[] = [];
  constructor() {
    this.viewDate = new Date();
    let event: CalendarEvent = {
      start : new Date(),
      end: new Date(),
      title: "test",
      color: {
        primary: "#00FF00",
        secondary: "#afafaf"
      }   
    };
    this.events.push(event)
  }

  ngOnInit() {
  }

}

