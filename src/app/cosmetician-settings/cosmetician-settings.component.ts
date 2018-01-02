import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import {DatabaseFirebaseService} from '../database-firebase.service'

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
     public addProducts(){
      this.databaseFirebase.addProducts();
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


}
