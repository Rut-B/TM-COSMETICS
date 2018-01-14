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
public res_im;
  constructor(public databaseFirebase: DatabaseFirebaseService ) {
    }
    ngOnInit() {
    }
     public addProducts(){
      this.databaseFirebase.addProducts(this.res_im);
    }
     public addTreatment(){
      this.databaseFirebase.addTreatment();
    }
     public addLocation(){
      this.databaseFirebase.addLocation();
    }
     public addCustomer()
    {
      this.databaseFirebase.addCustomer();  
    }
    public addCosmetician(){
      this.databaseFirebase.addCosmetician();
    }
    public addMessageManager(){
      this.databaseFirebase.addMessageManager();
    }
  
    public addAppointment(){
      this.databaseFirebase.addAppointment();
    }  
    public addSettingSunDay(){
      this.databaseFirebase.addSettingSunDay()
    }
    public addSettingMondayDay(){
      this.databaseFirebase.addSettingMondayDay()
    }
    public addSettingTuesdayDay(){
      this.databaseFirebase.addSettingTuesdayDay()
    }
    
    public addSettingWednesdayDay(){
      this.databaseFirebase.addSettingWednesdayDay()
    }
    
    public addSettingThursdayDay(){
      this.databaseFirebase.addSettingThursdayDay()
    }
    public addSettingFridayDay(){
      this.databaseFirebase.addSettingFridayDay()
    }
    public addOtherDate(){
      this.databaseFirebase.addOtherDate();
    }
// public uploadImage(image) {
//   //this.res_im=this.databaseFirebase.uploadImage(image);
//   if (image.length!=0){
//   this.databaseFirebase.uploadImage(image).then(res => {
//     this.res_im = res.downloadURL;
//   });
//   }

//   // public addOtherDate(){
//   //   this.databaseFirebase.addOtherDate();
//   // }
// }
}
  