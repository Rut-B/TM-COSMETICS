import { Injectable } from '@angular/core';
import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'; 
import * as firebase from 'firebase';
@Injectable()
export class CalendarMessageService {

  //private subject = new Subject<any>();
  private myEvents:CalendarEvent[]=[];
  //public name:string;
  //public lname:string; 
  //private itemDoc: AngularFirestoreDocument<any>;
  private col:AngularFirestoreCollection<any>;


  //public ob;
  
  constructor(private afs: AngularFirestore) {
   //this.itemDoc =this.afs.doc("events/1"); 
   this.col=this.afs.collection("events"); 
   this.col.valueChanges().subscribe(res=>{
     this.myEvents=res;
   });
     //this.ob=this.col.valueChanges();
 }
    sendMessage(event){
    this.col.add(event).then(res=>{
   })
   //this.myEvents.forEach(item=>alert(item));
  }

  
     /* clearMessage() {
          this.subject.next();
      }*/
      getMessage(){
          return this.myEvents;
      }

}
