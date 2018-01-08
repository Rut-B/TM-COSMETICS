import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'; 
import { appRoutes } from '../app.route'; 
import { CalendarEvent } from 'calendar-utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchmap'
import 'rxjs/add/observable/combineLatest';
import * as firebase from 'firebase';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { app } from 'firebase/app';
import { Data } from '@angular/router/src/config';


export interface event{
   userName: string;
   //cosmeticianName:string;
   type:string;
   start:Date;
   end:Date;
 }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
}) 

export class ProfileComponent implements OnInit {
  private col:AngularFirestoreCollection<any>;
 public appointments:event[];
 public myAppointments:event[];
 public myCosmetician:event[];
 public d:Date;
 public weeks; 
 public currentDate=new Date();
 dateFilter: BehaviorSubject<string | null>;

constructor(private afs: AngularFirestore) { 
  this.col=this.afs.collection<event>("myApointments"); 
  this.col.valueChanges(). subscribe(res=>{
      this.appointments=res;
    });
  }
  b(){ 
     this.myAppointments=[]; 
     for(var i=0,j=0;i<this.appointments.length;i++){
       if(this.appointments[i].userName=="noamijofen"){
        this.myAppointments[j]=this.appointments[i];
        j++;
       }
     }
  }
  /* getTurnByCosmetician()
  {
    this.myAppointments=[];
    for(var i=0,j=0;i<this.appointments.length;i++){
      if(this.appointments[i].cosmeticianName=="Eti"){
       this.myAppointments[j]=this.appointments[i];
       j++;
      }
    }
  }
  
 getTurnByTime()
  {
    this.myAppointments=[];
    
    //var date1=new Date();
    alert("this.d.getDate()"+this.d.getDate());
    
    for(var i=0,j=0;i<this.appointments.length;i++){
      //alert(i+" i")
      var date2=(this.appointments[i].start.getDate()) +"/"+ (this.appointments[i].start.getMonth()+1)+ "/"+ (this.appointments[i].start.getFullYear());
      var dofparse=(this.d.getDate()) +"/"+ (this.d.getMonth()+1)+ "/"+ (this.d.getFullYear());
      //var parsedate2=Date.parse(date2);
      alert("date2 "+date2);
      alert("dparse"+dofparse);
      if(date2==dofparse){
        alert("d"+this.d);
        //alert("31/12/2017");
       this.myAppointments[j]=this.appointments[i];
       j++;
      }
    }
  }*/
  
  getTurnByTime()
  {
    this.myAppointments=[];
    var date1=new Date();
    alert(this.appointments.length);
    for(var i=0,j=0;i<this.appointments.length;i++){
      alert(this.appointments[i].start.getDate());
      var date2=(this.appointments[i].start.getDate()) +"/"+ (this.appointments[i].start.getMonth()+1)+ "/"+ (this.appointments[i].start.getFullYear());
      if(date2=="31/12/2017"){
       this.myAppointments[j]=this.appointments[i];
       j++;
      }
    }
  }
  

  ngOnInit() {
  }
}
