import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {DatabaseFirebaseService} from '../database-firebase.service'
import * as firebase from 'firebase';
@Component({
  selector: 'app-cosmetician-settings',
  templateUrl: './cosmetician-settings.component.html',
  styleUrls: ['./cosmetician-settings.component.scss']
})
export class CosmeticianSettingsComponent implements OnInit {
  constructor(public databaseFirebase: DatabaseFirebaseService ) {   

  }
  ngOnInit() {
  }
  public addSettingDay(){
    this.databaseFirebase.addSettingDay();
  }

  // public addOtherDate(){
  //   this.databaseFirebase.addOtherDate();
  // }
}

