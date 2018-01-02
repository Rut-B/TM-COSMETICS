import { Component, OnInit } from '@angular/core';
import { CalendarEvent, } from "angular-calendar";
import {CalendarMessageService}from '../calendar-message.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: string = 'month';
  
   viewDate: Date = new Date();
    events: CalendarEvent[];
    clickedDate: Date; 
    private col:AngularFirestoreCollection<any>;
      
      constructor(private afs: AngularFirestore,private messageService:CalendarMessageService) {
       //this.itemDoc =this.afs.doc("events/1"); 
       this.col=this.afs.collection("events"); 
       this.viewDate = new Date();  
       this.col.valueChanges().subscribe(res=>{
         this.events=res;
       });
     }

  dayClicked(){
  this.addEvent(this.clickedDate);
  }

  addEvent(date){
     date=this.format(date);
     date=date+" 10:30:00";
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
     alert(event.start);
     this.messageService.sendMessage(event); 
     //this.events=this.messageService.getMessage(); 
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