import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DatabaseFirebaseService {
  public appointmentRef;
  public customerRef;
  public treatmentRef;
  public prodRef;
  public locationtRef;
  public cosmeticiansRef;
  public messageManagerRef;

  public specificName:string;
  public productName:string;
  public code:number;
  public marketer:string;
  public price:number;

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

  public customerId:string;//key
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
  
  constructor(private afs: AngularFirestore){
    this.appointmentRef = this.afs.collection("appointment");
    this.customerRef = this.afs.collection("customer");
    this.treatmentRef = this.afs.collection("treatments");
    this.prodRef = this.afs.collection("products");
    this.locationtRef = this.afs.collection("locations");
    this.cosmeticiansRef = this.afs.collection("cosmeticians");
    this.messageManagerRef = this.afs.collection("messageManager");
    this.treatmentPossibleCosmetician=[];//צריך לאתחל אותו בכל השמות של הקוסמטיקאיות שנמצאות האיחסון
    this.cosmeticianAvailability=[];
    this.appointmentCustomer=[];
    this.appointmentCosmetician=[];
  }
  addAppointment(){
    this.appointmentRef.doc(this.appointmentTime).set({
    customer:this.appointmentCustomer,
    cosmetician: this.appointmentCosmetician,
    duration :this.appointmentDuration,
    price:this.appointmentPrice,
    Location: this.appointmentLocation
}); 
}
addProducts(){ 
    let item={
      productName: this.productName,
      name: this.specificName,
      code: this.code, 
      marketer: this.marketer, 
      price:this.price
    }  
    this.prodRef.add(item).then(res=>{

    })


}
addTreatment(){
    this.treatmentRef.doc(this.treatmentName).set({
    code:this.treatmentCode,
    price:this.treatmentPrice,
    duration:this.treatmentDuration,
    PossibleCosmetician:this.treatmentPossibleCosmetician
});
}
addLocation(){
    this.locationtRef.doc(this.city).set({
    address:this.address, 
    phone:this.phone
});
} 
addCustomer(){
    this.appointmentCustomer.push(this.customerId);
    console.log(this.appointmentCustomer);
    this.customerRef.doc(this.customerId).set({
    name:this.customerFirstName,
    lname:this.customerLastName,
    phone:this.customerPhone,
    address:this.customerAddress,
    permissionLevel:this.customerPermissionLevel
});
}
addCosmetician(){
    this.treatmentPossibleCosmetician.push(this.cosmeticianId);
    this.appointmentCosmetician.push(this.cosmeticianId);
    console.log(this.treatmentPossibleCosmetician);
    console.log(this.appointmentCosmetician);
    this.cosmeticiansRef.doc(this.cosmeticianId).set({
    name: this.cosmeticianFirstName,
    lname: this.cosmeticianLastName,
    phone:this.cosmeticianPhone,
    permissionLevel:this.cosmeticianPermissionLevel,
    availability:this.cosmeticianAvailability
  });
}
addMessageManager(){  
    this.messageManagerRef.doc(this.from).set({
    from: this.from,
    to: this.to,
    content:this.content
  });
}

}










  
    //this.col=this.afs.collection('users');
    //this.prod=this.afs.collection('products');
    //this.prod.valueChanges().subscribe(res=>{
//this.product=res;
  //  });

    //this.col=this.afs.collection('')
    //this.col.valueChanges().subscribe(res=>{
    //  console.log(res);
    //  this.users=res;
   // });
  // this.ob=this.col.valueChanges();
  
 /* 
  constructor(private afs: AngularFirestore){
    this.itemDoc = this.afs.doc('users/1');
    let item = this.itemDoc.valueChanges().subscribe(res=>{
      this.name = res.name
    });
  }
*/
// delete(){
//   this.afs.collection('users').doc('ZKLtTI9ie5P4jXusU6tT').delete().then(function() {
//     console.log("Document successfully deleted!");
// }).catch(function(error) {
//     console.error("Error removing document: ", error);
// });
// }
  // send(){
  //   //this.pushProducts('face cream','mmt','123','uriel');
  //   this.col.add({name: this.name, lname: this.lname}).then(res=>{
  //   //  alert(res);
  //   //alert(this.name + ", " + this.lname);
  //  })
  // }

