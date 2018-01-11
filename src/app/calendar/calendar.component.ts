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

public iterate(){  
  var cc=document.getElementsByClassName("cal-cell");
  var cmonth=this.viewDate.getMonth();
  var cyear=this.viewDate.getFullYear();
  var daysInMonth=new Date(cyear, cmonth, 0).getDate();
  for(var i=7;i<38;i++){
    if(cc[i].getElementsByTagName("span")[1]!=null){
      if(cc[i].getElementsByTagName("span")[1].innerText=="1"){
    break;
    }
  }
    else if (cc[i].getElementsByTagName("span")[0].innerText=="1"){
    break;
    }
  }

  var dontDays=[];
  var t=i;
  var l=0;
for(i;i<=t+daysInMonth;i++){ 
   for(var j=0;j<this.mySpecDays.length;j++){
     var curr=new Date(this.mySpecDays[j].date);
     if(curr.getFullYear()==cyear&&curr.getMonth()==cmonth){
       var cday=curr.getDate().toString(); 
      if(cc[i].getElementsByTagName("span")[1]!=null){
        if(cc[i].getElementsByTagName("span")[1].innerText==cday){
      //  alert("hay!!!"+" "+cc[i].getElementsByTagName("span")[1].innerText);
        dontDays[l]=cday;
        l++;
       cc[i].className="a";
      }
     }
     else{
       if(cc[i].getElementsByTagName("span")[0].innerText==cday){
       // alert("hay!!!"+" "+cc[i].getElementsByTagName("span")[0].innerText);
        dontDays[l]=cday;
        l++;
        cc[i].className="a";
     }   
    }
   }
   }//end for mySpecDays 
   if(this.mySpecDays.length==dontDays.length){
     break;
   }
 }
 var cc=document.getElementsByClassName("cal-cell");
 var n; 
 var s=[];
 n=0;
 var m;
 for( i=0,m=0;m<daysInMonth-dontDays.length;m++,i++){
   if(cc[(i+t)].getElementsByTagName("span")[1]!=null){
    n=cc[(i+t)].getElementsByTagName("span")[1].innerText;
  }
  else{
   n=cc[(i+t)].getElementsByTagName("span")[0].innerText;
  }  
  s.push(n);
 // s.push(i+" "+n+"bb ");
  var d=new Date(cyear,cmonth,n); 
  for(var k=0;k<this.myDays.length;k++){ 
    //s.push(i+" "+k+" "+n);  
    var now=this.myDays[k].date;  
   if(this.check(d.getDay())==now){
    //console.log(this.check(d.getDay())+","+now+" "+i);
    cc[(i+t)].className="a2";
    i--;
     break;
   // alert(this.check(d.getDay())+" "+i);
   }
  }//end k
}//end cc
}
 public check(i){
  var arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return(arr[i]);
}
public scheduleTime(day:Date, duration:number):boolean{
return false;
}
public getAvailability(day:Date):string[]{
  
return ['start','end'];
}
}