import { Component, OnInit } from '@angular/core';
import { CalendarEvent} from "angular-calendar";
import {  ChangeDetectionStrategy } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
//import {CalendarMessageService}from '../calendar-message.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'; 


@Component({
  selector: 'app-cosmetician-calendar',
  templateUrl: './cosmetician-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cosmetician-calendar.component.css']
})

export class CosmeticianCalendarComponent implements OnInit{
 viewDate: Date;
 events: CalendarEvent[];
  view: string = 'day'; 
  private col:AngularFirestoreCollection<any>;
    
  constructor(private afs: AngularFirestore) { 
    this.col=this.afs.collection("events"); 
    this.viewDate = new Date();  
    this.col.valueChanges().subscribe(res=>{
      this.events=res;
    });
      //this.ob=this.col.valueChanges();
  }
    // this.cevents=this.messageService.getMessage(); 
       //alert("yeah!");
     // alert(this.format(date));  

/*constructor(private messageService:CalendarMessageService) { 
 this.viewDate = new Date();  
 this.events=messageService.getMessage();
} */
  ngOnInit() {

  }
}
