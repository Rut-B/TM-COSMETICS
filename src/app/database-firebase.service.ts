import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
@Injectable()
export class DatabaseFirebaseService {
public selected: string[]=[];

  public appointmentRef;
  public customerRef;
  public treatmentRef;
  public prodRef;
  public locationtRef;
  public cosmeticiansRef;
  public messageManagerRef;
  public settingDayRef;

  public quantity:number;
  public productName:string;
  public code:number;
  public price:number;
  public supplier: string;

  public city:string;
  public address:string;
  public phone:number;

  public cosmeticianId:string;
  public cosmeticianFirstName:string;
  public cosmeticianLastName:string;
  public cosmeticianPhone:number;
  public cosmeticianPermissionLevel:number;
  public  cosmeticianAvailability:string[];

  public from:string;
  public to:string;
  public content:string;




  public customerId:string;//key--email
  public customerFirstName:string;
  public customerLastName:string;
  public customerPhone:number;
  public customerAddress:string;
  public customerPermissionLevel:number;

  public treatmentName:string;
  public treatmentCode:number;//key
  public treatmentPrice:number;
  public treatmentDuration:Date;
  public treatmentPossibleCosmetician:string[];

  public appointmentCustomer:string[];
  public appointmentTime:Date;
  public appointmentCosmetician:string[];
  public appointmentDuration:Date;
  public appointmentPrice:number;
  public appointmentLocation:string;

 


  public Sunday:string;
  public sundayMorning:string;
  public sundayEvening:string;

  public Monday:string;
  public mondayMorning:string;
  public mondayEvening:string;

  public Tuesday:string;
  public tuesdayMorning:string;
  public tuesdayEvening:string;

  public Wednesday:string;
  public wednesdayMorning:string;
  public wednesdayEvening:string;

  public Thursday:string;
  public thursdayMorning:string;
  public thursdayEvening:string;

  public Friday:string;
  public fridayMorning:string;
  public fridayEvening:string;
  
  constructor(private afs: AngularFirestore){
    this.appointmentRef = this.afs.collection("appointment");
    this.customerRef = this.afs.collection("USERS");
    this.treatmentRef = this.afs.collection("treatments");
    this.prodRef = this.afs.collection("products");
    this.locationtRef = this.afs.collection("locations");
    this.cosmeticiansRef = this.afs.collection("cosmeticians");
    this.messageManagerRef = this.afs.collection("messageManager");
    this.settingDayRef=this.afs.collection("Setting Days")
    this.treatmentPossibleCosmetician=[];//צריך לאתחל אותו בכל השמות של הקוסמטיקאיות שנמצאות האיחסון
    this.cosmeticianAvailability=[];
    this.appointmentCustomer=[];
    this.appointmentCosmetician=[];
    this.Sunday="Sunday";
    this.Monday="Monday";
    this.Tuesday="Tuesday";
    this.Wednesday="Wednesday";
    this.Thursday="Thursday";
    this.Friday="Friday";
  }
  addAppointment(){
    let appoin={
      appointmentTime: this.appointmentTime,
      customer:this.appointmentCustomer,
      cosmetician: this.appointmentCosmetician,
      duration :this.appointmentDuration,
      price:this.appointmentPrice,
      Location: this.appointmentLocation
    }
    this.appointmentRef.add(appoin).then(res=>{
      
    })
}
addProducts(){ 
    let item={
      productName: this.productName,
      quantity: this.quantity,
      code: this.code, 
      price:this.price,
      supplier:this.supplier
    }  
    this.prodRef.add(item).then(res=>{
    })
}
addTreatment(){
  let treat={
    name:this.treatmentName,
    code:this.treatmentCode,
    price:this.treatmentPrice,
    duration:this.treatmentDuration+" minutes",
    PossibleCosmetician:this.treatmentPossibleCosmetician
  }
    this.treatmentRef.add(treat).then(res=>{
    })
}
addLocation(){
  let loc={
    city:this.city,    
    address:this.address, 
    phone:this.phone
  }
    this.locationtRef.add(loc).then(res=>{
    })
} 


addCustomer(){
    this.appointmentCustomer.push(this.customerId);
    console.log(this.appointmentCustomer);
    let cons={
      email:this.customerId,
      first_name:this.customerFirstName,
      last_name:this.customerLastName,
      phone:this.customerPhone,
      address:this.customerAddress,
      is_customer:true
    }
    this.customerRef.add(cons).then(res=>{
})
}
addCosmetician(){
    this.treatmentPossibleCosmetician.push(this.cosmeticianId);
    this.appointmentCosmetician.push(this.cosmeticianId);
    console.log(this.treatmentPossibleCosmetician);
    console.log(this.appointmentCosmetician);
    let cosmet={
      cosmeticianId:this.cosmeticianId,
      name: this.cosmeticianFirstName,
      lname: this.cosmeticianLastName,
      phone:this.cosmeticianPhone,
      permissionLevel:this.cosmeticianPermissionLevel,
      availability:this.cosmeticianAvailability
    }
    this.cosmeticiansRef.add(cosmet).then(res=>{
 
  })
}
addMessageManager(){  
    this.messageManagerRef.doc(this.from).set({
    from: this.from,
    to: this.to,
    content:this.content
  });
}
uploadImage(image, options) {
  let storageRef = firebase.storage().ref();
  return storageRef.put(image, options);
}

}

