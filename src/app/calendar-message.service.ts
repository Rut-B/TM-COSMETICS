import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
@Injectable()
export class CalendarMessageService {

  private myEvents: CalendarEvent[];
  private col: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.col = this.afs.collection("events");
    this.col.valueChanges().subscribe(res => {
      this.myEvents = res;
    });
  }
  sendMessage(event) {
    this.col.add(event).then(res => {
    })
  }
  getMessage() {
    return this.myEvents ? this.myEvents : [];
  }
}
