import { Component, OnInit ,ViewChild} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatabaseFirebaseService } from '../database-firebase.service'
import * as firebase from 'firebase';






@Component({
  selector: 'app-cosmetician-settings',
  templateUrl: './cosmetician-settings.component.html',
  styleUrls: ['./cosmetician-settings.component.scss']
})



export class CosmeticianSettingsComponent implements OnInit {
  @ViewChild ('upload_input')upload_input;
  public res_im;
  constructor(public databaseFirebase: DatabaseFirebaseService) {
  }
  ngOnInit() {
  }
  public addProducts() {
    this.databaseFirebase.addProducts(this.res_im);
  }
  public addTreatment() {
    this.databaseFirebase.addTreatment();
  }
  public addLocation() {
    this.databaseFirebase.addLocation();
  }
  public addCustomer() {
    this.databaseFirebase.addCustomer();
  }
  public addCosmetician() {
    this.databaseFirebase.addCosmetician();
  }
  public addMessageManager() {
    this.databaseFirebase.addMessageManager();
  }
  public addAppointment() {
    this.databaseFirebase.addAppointment();
  }
  public addSettingSunDay() {
    this.databaseFirebase.addSettingSunDay()
  }
  public addSettingMondayDay() {
    this.databaseFirebase.addSettingMondayDay()
  }
  public addSettingTuesdayDay() {
    this.databaseFirebase.addSettingTuesdayDay()
  }

  public addSettingWednesdayDay() {
    this.databaseFirebase.addSettingWednesdayDay()
  }

  public addSettingThursdayDay() {
    this.databaseFirebase.addSettingThursdayDay()
  }
  public addSettingFridayDay() {
    this.databaseFirebase.addSettingFridayDay()
  }

  public uploadImage(event) {
    let file_pic=this.upload_input.nativeElelement;

    console.log(file_pic.files[0]);
    let i=document.getElementById("img");
    i.setAttribute("src", event[0]);
    // if(image.length > 0)
    // this.res_im = this.databaseFirebase.uploadImage(image[0])
    // if (image.length != 0) {
    //   this.databaseFirebase.uploadImage(image).then(res => {
    //     this.res_im = res.downloadURL;
    //   });
    }

    //   // public addOtherDate(){
    //   //   this.databaseFirebase.addOtherDate();
    //   // }
    // }
  }
