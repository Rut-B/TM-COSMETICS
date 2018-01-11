import { Component, OnInit } from '@angular/core';
import { CalendarEvent, } from "angular-calendar";
//import {CalendarMessageService}from '../calendar-message.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { query } from '@angular/core/src/animation/dsl';
import {DataService} from '../data.service';
import { _createDefaultCookieXSRFStrategy } from '@angular/http/src/http_module';

/*export class appointment{
  event:CalendarEvent;
  userName:string;
  treatment:string;
}*/
export class appoi{
  userName: string;
  type:string;
  start:Date;
  end:Date;
}
export interface aDay{
  date:string;
  hoursEvning:string;
  hoursMorning:string;

}

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
  myAppois:appoi[]; 
  mySpecDays:aDay[];
  myDays:aDay[];
  clickedDate: Date;  
  //appoi:appointment;
    private col:AngularFirestoreCollection<any>;
    private myAppCol:AngularFirestoreCollection<any>;
    private mySpeDays:AngularFirestoreCollection<any>;
    private mySettDays:AngularFirestoreCollection<any>;
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
       this.myAppCol=this.afs.collection("myApointments");
       this.myAppCol.valueChanges().subscribe(res=>{
        this.myAppois=res;
       });
       this.mySpeDays=this.afs.collection("specificDays");
       this.mySpeDays.valueChanges().subscribe(res=>{
        this.mySpecDays=res;
       });
       this.mySettDays=this.afs.collection("Setting Days");
       this.mySettDays.valueChanges().subscribe(res=>{
        this.myDays=res;
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
    this.col.add(event).then(res => {
    })
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
public scheduleTime(day:Date, duration:number):boolean{
return false;
}
public getAvailability(day:Date):string[]{
  this.mySpecDays[0];
  this.myDays[0];
  let dayInTheWeek:string;
 // alert(day.getDay());
  switch(day.getDay()){
    case 0:
    dayInTheWeek="Sunday";
    break;
    case 1:
    dayInTheWeek="Monday";
    break;
    case 2:
    dayInTheWeek="Tuesday";
    break;
    case 3:
    dayInTheWeek="Wednesday";
    break;
    case 4:
    dayInTheWeek="Thursday";
    break;
    case 5:
    dayInTheWeek="Friday";
    break;
  }
  console.log(this.myDays);
  let spec_date;
  let res=[];
  for(let j=0;j<this.mySpecDays.length;j++){
    spec_date=new Date(this.mySpecDays[j].date);
    let is_same=this.compareDates(spec_date,day);
    if(is_same){
      let start=this.split_hours(this.mySpecDays[j].hoursMorning);
      let end=this.split_hours(this.mySpecDays[j].hoursEvning);
      if ((start.length==2)&&(end.length==2)){
        res.push(start);
        res.push(end);
        return res;
      }
      else{
        console.log("wrong value in DB!");
        return['0','0'];
      }
      
    }
  }
  for(let i=0;i<this.myDays.length;i++){
    if(this.myDays[i].date==dayInTheWeek){
      let start=this.split_hours(this.myDays[i].hoursMorning);
      let end=this.split_hours(this.myDays[i].hoursEvning);
      if ((start.length==2)&&(end.length==2)){
        res.push(start);
        res.push(end);
        return res;
      }
      else{
        console.log("wrong value in DB!");
        return ['0','0'];
      }
    }
  }
 // console.log(dayInTheWeek);
return ['0','0'];
}
public split_hours(hour:string):string[]{
  let range=hour.split("-");
  if(range.length==2){
    return [range[0],range[1]];
  }
  if (range[0]=="vacation"){
    return ['0','0'];
}
return ['false'];
}
public compareDates(date1:Date, date2:Date):boolean{
  if (date1.getFullYear()!=date2.getFullYear())
    return false;
  if(date1.getMonth()!==date2.getMonth())
    return false;
  if (date1.getDate()!=date2.getDate())
    return false;
  return true;
}
}