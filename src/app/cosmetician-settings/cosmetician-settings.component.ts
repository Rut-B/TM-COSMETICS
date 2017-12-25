import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
@Component({
  selector: 'app-cosmetician-settings',
  templateUrl: './cosmetician-settings.component.html',
  styleUrls: ['./cosmetician-settings.component.scss']
})
export class CosmeticianSettingsComponent implements OnInit {

  public treatmentName:string;
  public TreatmentDescription:string;
  public treatmentCode:number;//key
  public treatmentPrice:number;
  public treatmentDuration:string;
  
  
  public city:string;
  public address:string;
  public phone:number;
  
  // public userId:string;
  // public userFirstName:string;
  // public userLastName:string;
  // public userPhone:number;
  
  public cosmeticianId:string;
  public cosmeticianName:string;
  public cosmeticianPhone:number;
  public permissionLevel:number;
  public availability:Array<string>; 
  

  public managerId:string;
  public managerFirstName:string;
  public managerLastName:string;
  public managerPhone:number;

public customerId:string;//key
public customerFirstName:string;
public customerLastName:string;
public customerPhone:number;
public customerAddress:string;
public customerPermissionLevel:number;

  
public customerRef;
public treatmentRef;
public locationtRef;
public cosmeticiansRef;
public managerRef;



//private
constructor(private afs: AngularFirestore){
  this.customerRef = this.afs.collection("customer");
  this.treatmentRef = this.afs.collection("treatments");
  this.locationtRef = this.afs.collection("locations");
  this.cosmeticiansRef = this.afs.collection("cosmetician");
  this.managerRef = this.afs.collection("manager");

}
  //constructor(private afs: AngularFirestore) { }


  addTreatment(name,code){
    
      //var  treatmentRef = this.afs.collection("treatments");
        
      this.treatmentRef.doc(this.treatmentCode).set({
        description:this.TreatmentDescription,
        price:this.treatmentPrice,
        duration:this.treatmentDuration,
        name: this.treatmentName,
        code:this.treatmentCode
        });
    
    }

    addLocation(address,phone){
      
        //var  locationtRef = this.afs.collection("locations");
         
        this.locationtRef.doc(this.city).set({
            address: this.address, 
            phone: this.phone
          });
      
      }

      addCustomer(firstName,lastName, id,phone){
       //this.customerRef = this.afs.collection("customer");
        
        this.customerRef.doc(this.customerId).set({
          name:this.customerFirstName,
          lname:this.customerLastName,
          phone:this.customerPhone,
          address:this.customerAddress,
          permissionLevel:this.customerPermissionLevel
          
        });
      
        }

        addCosmetician(firstName,lastName, id,phone,availability){
         // var  cosmeticiansRef = this.afs.collection("cosmetician");
          
          this.cosmeticiansRef.doc(this.cosmeticianId).set({
            name: this.cosmeticianName,
            permissionLevel: this.permissionLevel,
            availability:this.availability,
            Phone:this.cosmeticianPhone
          });
        
        }

        addManager(firstName,lastName, id,phone){
          //var  managerRef = this.afs.collection("manager");
          
          this.managerRef.doc(this.managerId).set({
            name: this.managerFirstName,
            lname: this.managerLastName,
            phone:this.managerPhone
          });
        
        }
  ngOnInit() {
  }

}
