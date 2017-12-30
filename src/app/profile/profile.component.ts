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

export interface event{
  userName: string;
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

  ngOnInit() {
  }

}
