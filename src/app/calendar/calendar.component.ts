import { Component, OnInit } from '@angular/core';
import { CalendarEvent, } from "angular-calendar";
//import {CalendarMessageService}from '../calendar-message.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { query } from '@angular/core/src/animation/dsl';
import {DataService} from '../data.service'

/*export class appointment{
  event:CalendarEvent;
  userName:string;
  treatment:string;
}*/


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: string = 'month'; 
   viewDate: Date = new Date();
  events:CalendarEvent[]; 

  /*treatment:string;
  userName:string; 
  apps:appointment[];*/
  
  clickedDate: Date;  
  //appoi:appointment;
    private col:AngularFirestoreCollection<any>;
      
      constructor(private afs: AngularFirestore ,private dataService:DataService) {
       //this.itemDoc =this.afs.doc("events/1"); 
       this.col=this.afs.collection("events"); 
       this.viewDate = new Date();  
       this.col.valueChanges().subscribe(res=>{
       /*  this.apps=res;
        for(var i=0;i<res.length;i++){
          this.events[i]=res[i].event;
        }*/
        this.events=res; 
       
       }); 
     }

  dayClicked(){
  this.addEvent(this.clickedDate);
  alert(this.dataService.totalDuration)
  alert(this.dataService.selected_treatments);
  }
  
  addEvent(date){
     date=this.format(date);
     date=date+" 10:30:00";
    this.viewDate = new Date();
    let event: CalendarEvent = {
      start:new Date(date),
      // end: new Date(),
       title: "appointment",
       color: {
         primary: "#00FF00",
         secondary: "#afafaf"
       }   
     };  
 /*this.userName="noamijofen";
 this.treatment="laser";
    let appoi: appointment={
      event:cevent,
     userName:this.userName,
     treatment:this.treatment
    }*/
    
  // this.messageService.sendMessage(event);
    this.col.add(event).then(res => {
    })
 // alert("!!");
  }

  ngOnInit() {
  }
format(curr){
  var dd = curr.getDate();
var mm = curr.getMonth()+1; 
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

trying(){
  var day=this.events[0].start.getDate().toString();
  var month=this.events[0].start.getMonth();
  var year=this.events[0].start.getFullYear();
  alert(day+", "+month+" ,"+year);
if(this.viewDate.getMonth()==month&&this.viewDate.getFullYear()==year){
   var cc=document.getElementsByClassName("cal-cell");
  for(var i=7;i<42;i++){ 
   if(cc[i].getElementsByTagName("span")[1]!=null){
     if(cc[i].getElementsByTagName("span")[1].innerText==day){
     alert("hay!!!"+" "+cc[i].getElementsByTagName("span")[1].innerText);
    cc[i].className="a";
   }
  }
  else{
    if(cc[i].getElementsByTagName("span")[0].innerText==day){
      alert("hay!!!"+" "+cc[i].getElementsByTagName("span")[0].innerText);
     cc[i].className="a";
  }
}
}
}
}
}