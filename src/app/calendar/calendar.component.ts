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
/***********************************************/
/* aother:Tamar */
public getAvailability(day:Date):appoi[]
{
//I assume there is two parametrs in this array.
  
return null;
}
/* aother:Rut */
public getDist(startTime:Date,endTime:Date):number
{
  var diff = endTime.getTime() - startTime.getTime();
//return duration in --->min<----.endTIme-startTime
return (diff / 60000);
}

public sortTime(arrayAppoi:appoi[]):appoi[]{
return null; 
}


/***********************************************************
* this function return array of the time that can make appoinmtments.

Assumption: duration in min. 
*************************************************************/

public scheduleTime(time:Date, duration:number):appoi[]
{
let valid_time_array: appoi[]=null;
//validation

    if (duration <= 0)
    {
        return valid_time_array;//true;
    }


//check if cosmetician cam work in this day..
let timeToWork: appoi[];
    timeToWork= this.getAvailability(time);//get array of start:end,start:end
    let startMorning=timeToWork[0].start;
    let endMorning=timeToWork[0].end;
    let startEvening=timeToWork[1].start;
    let endtEvening=timeToWork[1].end;
    let durationWorkA = this.getDist(startMorning,endMorning);
    let durationWorkB = this.getDist(startEvening,endtEvening);

    if ((duration >durationWorkA)&&
            (duration >durationWorkB))
    {
        return null;
    }

let appoi_in_time:appoi[];
let sort_appoi:appoi[];
let appointmensArray:appoi[];

    this.myAppCol=this.afs.collection("myApointments");
    this.myAppCol.valueChanges().subscribe(res=> {
        appointmensArray=res;
    });
    let j=0;
    if(appointmensArray.length == 0)
    {
      let newValidApp =new appoi();
      newValidApp.start = startMorning;
      newValidApp.end   = endMorning;
      valid_time_array.push(newValidApp);
      return valid_time_array;
    }
    for(let i=0; i<appointmensArray.length; i++)
    {
        let appoi_time =appointmensArray[i].start;
        let appoi_date_start=appointmensArray[i].start.getDay;
        let appoi_date_end=appointmensArray[i].end.getDay;
        if(  (appoi_date_end==appoi_date_start)&&
                (appoi_date_start==time.getDay)&&
                (appoi_time.getMonth==time.getMonth)&&
                (appoi_time.getFullYear==time.getFullYear))
        {
            appoi_in_time[j]=appointmensArray[i];
            j++;
        }

    }
    sort_appoi=this.sortTime(appoi_in_time);
    for(let i=1; i<sort_appoi.length; i++) { //run startB-endA>=duration->push to array of times..
        if((this.getDist(sort_appoi[i-1].end,sort_appoi[i].start) >=duration)&&
           (sort_appoi[i].start != startEvening))
         {
            let newValidApp =new appoi();
            newValidApp.start =sort_appoi[i-1].end;
            newValidApp.end =sort_appoi[i].start;
            valid_time_array.push(newValidApp);
        }

    }

    return valid_time_array;
}
}