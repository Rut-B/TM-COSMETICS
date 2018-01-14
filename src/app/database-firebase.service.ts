import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import{AuthService} from './auth.service';
import * as firebase from "firebase";

export interface event{
  date: string;
  hoursMorning: string;
  hoursEvning: string;
}
//  @Injectable() 
// import * as firebase from 'firebase';
@Injectable()
export class DatabaseFirebaseService {
  public selected: string[] = [];
  public flag: number;
  public appointmentRef;
  public customerRef;
  public treatmentRef;
  public prodRef;
  public cosmeticiansRef;
  public managerRef;
  public settingDayRef;
  public specificOfDate;

  public quantity:number;
  public productName:string;
  public code:number;
  public price:number;
  // public supplier: string;


  // public cosmeticianFirstName:string;
  // public cosmeticianPermissionLevel:number;
  // public  cosmeticianAvailability:string[];

  public customerId: string = this.auth.current_user.email;//key--email
  public customerFirstName: string = "";
  public customerLastName: string = "";
  public customerPhone: number = null;
  public customerAddress: string = "";
  public customer_rank: boolean;

  public treatmentName:string;
  public treatmentDescription:string
  public treatmentCode:number;//key
  public treatmentPrice:number;
  public treatmentDuration:Date;
  // public treatmentPossibleCosmetician:string[];

  public appointmentCustomer: string[];
  public appointmentTime: Date;
  public appointmentCosmetician: string[];
  public appointmentDuration: Date;
  public appointmentPrice: number;
  public appointmentLocation: string;

public managerFirstName:string;
public managerLastName:string;
public managerPhone:number;

  public Sunday: string;
  public sundayMorning: string;
  public sundayEvening: string;

  public Monday: string;
  public mondayMorning: string;
  public mondayEvening: string;

  public Tuesday: string;
  public tuesdayMorning: string;
  public tuesdayEvening: string;

  public Wednesday: string;
  public wednesdayMorning: string;
  public wednesdayEvening: string;

  public Thursday: string;
  public ThursdayMorning: string;
  public ThursdayEvening: string;

  public Friday: string;
  public fridayMorning: string;
  public fridayEvening: string;

  public other: string;
  public otherMorning: string;
  public otherEvening: string;

  private col: AngularFirestoreCollection<any>;
  public days: event[];
  public myDay: event[];


  constructor(private afs: AngularFirestore,public auth:AuthService) {
    this.appointmentRef = this.afs.collection("appointment");
    this.customerRef = this.afs.collection("USERS");
    this.treatmentRef = this.afs.collection("treatments");
    this.prodRef = this.afs.collection("products");
    // this.cosmeticiansRef = this.afs.collection("cosmeticians");
    this.managerRef = this.afs.collection("manager");
    this.settingDayRef=this.afs.collection("Setting Days");
    this.specificOfDate=this.afs.collection("specificDays");
    // this.treatmentPossibleCosmetician=[];//צריך לאתחל אותו בכל השמות של הקוסמטיקאיות שנמצאות האיחסון
    // this.cosmeticianAvailability=[];
    this.appointmentCustomer=[];
    this.appointmentCosmetician=[];
    this.Sunday="Sunday";
    this.Monday="Monday";
    this.Tuesday="Tuesday";
    this.Wednesday="Wednesday";
    this.Thursday="Thursday";
    this.Friday="Friday";
    this.other="";
    this.myDay=new Array(); 
    this.days=new Array(); 
    this.flag=0;
    this.col=this.afs.collection<event>("Setting Days"); 
    this.col.valueChanges().subscribe(res=>{
        this.days=res;
      });      
  }
  addAppointment() {
    let appoin = {
      appointmentTime: this.appointmentTime,
      customer: this.appointmentCustomer,
      cosmetician: this.appointmentCosmetician,
      duration: this.appointmentDuration,
      price: this.appointmentPrice,
      Location: this.appointmentLocation
    }
    this.appointmentRef.add(appoin).then(res => {

    })
  }
  addProducts(url) {
    let item = {
      productName: this.productName,
      quantity: this.quantity,
      code: this.code, 
      price:this.price,
      // supplier:this.supplier,
      pic:url
    }  
    this.prodRef.add(item).then(res=>{
    })
}
addTreatment(){
  let treat={
    name:this.treatmentName,
    code:this.treatmentCode,
    price:this.treatmentPrice,
    Description:this.treatmentDescription,
    duration:this.treatmentDuration+" minutes",
    // PossibleCosmetician:this.treatmentPossibleCosmetician
  }
    this.treatmentRef.add(treat).then(res=>{
    });
}
  addCustomer() {
    this.appointmentCustomer.push(this.customerId);
    console.log(this.appointmentCustomer);
    let cons = {
      email: this.customerId,
      first_name: this.customerFirstName,
      last_name: this.customerLastName,
      phone: this.customerPhone,
      address: this.customerAddress,
      is_customer: true
    }
    this.customerRef.add(cons).then(res=>{
})
}
// addCosmetician(){
//     // this.treatmentPossibleCosmetician.push(this.cosmeticianId);
//     // this.appointmentCosmetician.push(this.cosmeticianId);
//     console.log(this.treatmentPossibleCosmetician);
//     console.log(this.appointmentCosmetician);
//     let cosmet={
//       name: this.cosmeticianFirstName,
//       permissionLevel:this.cosmeticianPermissionLevel,
//       availability:this.cosmeticianAvailability
//     }
//     this.cosmeticiansRef.add(cosmet).then(res => {

//     })
//   }
  addManager() {
    let manage= {
      name:this.managerFirstName,
      lname:this.managerLastName,
      phone:this.managerPhone
    }
    this.managerRef.add(manage).then(res => { 
          });
  }
  
  // uploadImage(image) {
  //    let storageRef = firebase.storage().ref();
  //   return storageRef.put(image);
  // }

  public IsNotEmpty(){
   if((this.customerId!="")     && 
   (this.customerFirstName!="") &&
   (this.customerLastName!="")  &&
   (this.customerPhone!=null)   &&
   (this.customerAddress!=""))
   {
     return true;

   }
   return false;
  }
   

addSettingSunDay(){ 
  // this.myDay=[];  
  // for(var i=0,j=0;i<this.days.length;i++){    
  //   if(this.days[i].date=="Sunday"){
  //     this.flag=1;
  //    this.myDay[j]=this.days[i];
  //    j++;
  //   }
  // }
  let hoursSunday={
    date: this.Sunday,
    hoursMorning: this.sundayMorning,
    hoursEvning:this.sundayEvening
  } 
       this.settingDayRef.doc(this.Sunday).set(hoursSunday);
        this.settingDayRef=this.afs.doc("Setting Days/" +this.Sunday);           
        this.settingDayRef.valueChanges().subscribe(res=>{
        this.Sunday=res.Sunday;
        this.sundayEvening=res.sundayEvening;
        this.sundayMorning=res.sundayMorning;
      });
      this.settingDayRef=this.afs.collection("Setting Days");    
}
addSettingMondayDay()
{
  let hoursMonday={
    date: this.Monday,
    hoursMorning: this.mondayMorning,
    hoursEvning:this.mondayEvening
    }    
      this.settingDayRef.doc(this.Monday).set(hoursMonday);
      this.settingDayRef=this.afs.doc("Setting Days/" +this.Monday);                     
      this.settingDayRef.valueChanges().subscribe(res=>{
      this.Monday=res.Monday;
      this.mondayMorning=res.mondayMorning;
      this.mondayEvening=res.mondayEvening;
    });
    this.settingDayRef=this.afs.collection("Setting Days");    
}
addSettingTuesdayDay()
{
              let hoursTuesday={
                date: this.Tuesday,
                hoursMorning: this.tuesdayMorning,
                hoursEvning:this.tuesdayEvening
              }  
              
                  this.settingDayRef.doc(this.Tuesday).set(hoursTuesday);
                  this.settingDayRef=this.afs.doc("Setting Days/" +this.Tuesday);           
                  this.settingDayRef.valueChanges().subscribe(res=>{
                  this.Tuesday=res.Tuesday;
                  this.tuesdayMorning=res.tuesdayMorning;
                  this.tuesdayEvening=res.tuesdayEvening;
                });
                this.settingDayRef=this.afs.collection("Setting Days")
                
}
addSettingWednesdayDay()
{
            let hoursWednesday={
            date: this.Wednesday,
            hoursMorning: this.wednesdayMorning,
            hoursEvning:this.wednesdayEvening
          }  
         
            this.settingDayRef.doc(this.Wednesday).set(hoursWednesday);
            this.settingDayRef=this.afs.doc("Setting Days/" +this.Wednesday);           
            this.settingDayRef.valueChanges().subscribe(res=>{
            this.Wednesday=res.Wednesday;
            this.wednesdayMorning=res.wednesdayMorning;
            this.wednesdayEvening=res.wednesdayEvening;
          });
                    this.settingDayRef=this.afs.collection("Setting Days");
}
addSettingThursdayDay()
{
  let hoursThursday={
    date: this.Thursday,
    hoursMorning: this.ThursdayMorning,
    hoursEvning:this.ThursdayEvening
  }  
  this.settingDayRef.doc(this.Thursday).set( hoursThursday);  
    this.settingDayRef=this.afs.doc("Setting Days/" +this.Thursday);           
    this.settingDayRef.valueChanges().subscribe(res=>{
    this.Thursday=res.Thursday;
    this.ThursdayMorning=res.ThursdayMorning;
    this.ThursdayEvening=res.ThursdayEvening;
  });
  this.settingDayRef=this.afs.collection("Setting Days");
}
addSettingFridayDay()
{
    let hoursFriday={
    date: this.Friday,
    hoursMorning: this.fridayMorning,
    hoursEvning:this.fridayEvening
  }  

    this.settingDayRef.doc(this.Friday).set(hoursFriday);
    this.settingDayRef=this.afs.doc("Setting Days/" +this.Friday);           
    this.settingDayRef.valueChanges().subscribe(res=>{
    this.Friday=res.Friday;
    this.fridayMorning=res.fridayMorning;
    this.fridayEvening=res.fridayEvening;
  });
  this.settingDayRef=this.afs.collection("Setting Days");
}
public uploadImage(image) {
  let storageRef = firebase.storage().ref();
  return storageRef.put(image).then(img=>{
    console.log(img)
  });
}

addOtherDate()
      {
        let hoursOther={
          date: this.other,
          hoursMorning: this.otherMorning,
          hoursEvning:this.otherEvening
          }  
          this.specificOfDate.add(hoursOther).then(res=>{
          });
      }
}



/*getTurnByTime()
{
  this.myAppointments=[];
  var date1=new Date();
 // alert(this.appointments.length);
  for(var i=0,j=0;i<this.appointments.length;i++){
    //alert(this.appointments[i].start.getDate());
    var date2=(this.appointments[i].start.getDate()) +"/"+ (this.appointments[i].start.getMonth()+1)+ "/"+ (this.appointments[i].start.getFullYear());
    if(date2=="31/12/2017"){
     this.myAppointments[j]=this.appointments[i];
     j++;
    }
  }
  let hoursFriday={
    date: this.Friday,
    hoursMorning: this.fridayMorning,
    hoursEvning:this.fridayEvening
  } 
 
   this.settingDayRef.doc(this.Friday).set(hoursFriday);
   this.settingDayRef=this.afs.doc("Setting Days/" +this.Friday);           
   this.settingDayRef.valueChanges().subscribe(res=>{
   this.Friday=res.Monday;
   this.sundayEvening=res.sundayEvening;
   this.sundayMorning=res.sundayMorning;
 });
 this.settingDayRef=this.afs.collection("Setting Days");
 
}
/*getTurnByCosmetician()
{
  this.myAppointments=[];
  for(var i=0,j=0;i<this.appointments.length;i++){
    if(this.appointments[i].cosmeticianName=="Eti"){
     this.myAppointments[j]=this.appointments[i];
     j++;
    }
  }
}*/







// }
// addOtherDate()
// {
//   let hoursOther={
//     date: this.other,
//     hoursMorning: this.otherMorning,
//     hoursEvning:this.otherEvening
//   }  
//   this.settingDayRef.add(hoursOther).then(res=>{
//   })
// }








// export class ProfileComponent implements OnInit {


//  public myCosmetician:event[];
//  public d:Date;
//  public weeks; 
//  public currentDate=new Date();
//  dateFilter: BehaviorSubject<string | null>;

// constructor(private afs: AngularFirestore) { 

//   }








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

