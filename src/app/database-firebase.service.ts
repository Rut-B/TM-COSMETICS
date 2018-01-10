import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export interface event{
  date: string;
  hoursMorning:string;
  hoursEvning:string;
 }
//  @Injectable() 
// import * as firebase from 'firebase';
@Injectable()
export class DatabaseFirebaseService {
public selected: string[]=[];
public flag:number;
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

  public other:string;
  public otherMorning:string;
  public otherEvening:string;

  private col:AngularFirestoreCollection<any>;
  public days:event[];
  public myDay:event[];
  public itemdoc:AngularFirestoreDocument<any>;


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
    this.myDay=new Array(); 
    this.days=new Array(); 
    this.flag=0;
    this.col=this.afs.collection<event>("Setting Days"); 
    this.col.valueChanges().subscribe(res=>{
        this.days=res;
      });
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
addProducts(url){ 
    let item={
      productName: this.productName,
      quantity: this.quantity,
      code: this.code, 
      price:this.price,
      supplier:this.supplier,
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
/*first_name: string;
  last_name: string;
  email: string;
  address:string;
  phone:number;
  is_customer:boolean;*/

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
addSettingSunDay(){ 
  this.myDay=[];  
  for(var i=0,j=0;i<this.days.length;i++){    
    if(this.days[i].date=="Sunday"){
      this.flag=1;
     this.myDay[j]=this.days[i];
     j++;
    }
  }
  let hoursSunday={
    date: this.Sunday,
    hoursMorning: this.sundayMorning,
    hoursEvning:this.sundayEvening
  } 
  if(this.flag==0)
  {
      this.settingDayRef.add(hoursSunday);
  }
  else{
    console.log("hhhhiii");
    console.log(this.myDay); 
    // this.settingDayRef.set(hoursSunday.hoursMorning);
     this.myDay[0].hoursEvning=hoursSunday.hoursEvning;
     this.myDay[0].hoursMorning=hoursSunday.hoursMorning;
    //  this.settingDayRef.doc('Sunday').update(hoursSunday.hoursEvning);
    console.log(this.myDay); 
  }
this.flag=0;
}
addSettingMondayDay()
{
    this.myDay=[];  
    for(var i=0,j=0;i<this.days.length;i++){    
      if(this.days[i].date=="Monday"){
        this.flag=1;
      this.myDay[j]=this.days[i];
      j++;
      }
    }
  let hoursMonday={
    date: this.Monday,
    hoursMorning: this.mondayMorning,
    hoursEvning:this.mondayEvening
  }    
    if(this.flag==0)
    {
        this.settingDayRef.add(hoursMonday).then(res=>{
            })
    }
    else{
      console.log("hhhhiii");
      console.log(this.myDay); 
      // this.settingDayRef.set(hoursSunday.hoursMorning);
      this.myDay[0].hoursEvning=hoursMonday.hoursEvning;
      this.myDay[0].hoursMorning=hoursMonday.hoursMorning;
      //  this.settingDayRef.doc('Sunday').update(hoursSunday.hoursEvning);
      console.log(this.myDay); 
    }
  this.flag=0;
}
addSettingTuesdayDay()
{
              this.myDay=[];  
              for(var i=0,j=0;i<this.days.length;i++){    
                if(this.days[i].date=="Tuesday"){
                  this.flag=1;
                this.myDay[j]=this.days[i];
                j++;
                }
              }
              let hoursTuesday={
                date: this.Tuesday,
                hoursMorning: this.tuesdayMorning,
                hoursEvning:this.tuesdayEvening
              }  
              if(this.flag==0)
              {
                  this.settingDayRef.add(hoursTuesday).then(res=>{
                      })
              }
              else{
                console.log("hhhhiii");
                console.log(this.myDay); 
                // this.settingDayRef.set(hoursSunday.hoursMorning);
                this.myDay[0].hoursEvning=hoursTuesday.hoursEvning;
                this.myDay[0].hoursMorning=hoursTuesday.hoursMorning;
                //  this.settingDayRef.doc('Sunday').update(hoursSunday.hoursEvning);
                console.log(this.myDay); 
              }
            this.flag=0;
}
addSettingWednesdayDay()
{
  this.myDay=[];  
  for(var i=0,j=0;i<this.days.length;i++){    
    if(this.days[i].date=="Wednesday"){
      this.flag=1;
    this.myDay[j]=this.days[i];
    j++;
    }
  }
    let hoursWednesday={
    date: this.Wednesday,
    hoursMorning: this.wednesdayMorning,
    hoursEvning:this.wednesdayEvening
  }  
  if(this.flag==0)
  {
      this.settingDayRef.add(hoursWednesday).then(res=>{
          })
  }
  else{
    console.log("hhhhiii");
    console.log(this.myDay); 
    // this.settingDayRef.set(hoursSunday.hoursMorning);
    this.myDay[0].hoursEvning=hoursWednesday.hoursEvning;
    this.myDay[0].hoursMorning=hoursWednesday.hoursMorning;
    //  this.settingDayRef.doc('Sunday').update(hoursSunday.hoursEvning);
    console.log(this.myDay); 
  }
this.flag=0;
}
addSettingThursdayDay()
{
  this.myDay=[];  
  for(var i=0,j=0;i<this.days.length;i++){    
    if(this.days[i].date=="Thursday"){
      this.flag=1;
    this.myDay[j]=this.days[i];
    j++;
    }
  }
    let hoursThursday={
    date: this.Thursday,
    hoursMorning: this.thursdayMorning,
    hoursEvning:this.thursdayEvening
  }  
  if(this.flag==0)
  {
      this.settingDayRef.add(hoursThursday).then(res=>{
          })
  }
  else{
    console.log("hhhhiii");
    console.log(this.myDay); 
    // this.settingDayRef.set(hoursThursday.hoursMorning);
    this.myDay[0].hoursEvning=hoursThursday.hoursEvning;
    this.myDay[0].hoursMorning=hoursThursday.hoursMorning;
    //  this.settingDayRef.doc('Sunday').update(hoursSunday.hoursEvning);
    console.log(this.myDay); 
  }
this.flag=0;
}
addSettingFridayDay()
{
this.myDay=[];  
for(var i=0,j=0;i<this.days.length;i++){    
  if(this.days[i].date=="Friday"){
    this.flag=1;
  this.myDay[j]=this.days[i];
  j++;
  }
}

  let hoursFriday={
    date: this.Friday,
    hoursMorning: this.fridayMorning,
    hoursEvning:this.fridayEvening
  } 
if(this.flag==0)
{
    this.settingDayRef.add(hoursFriday).then(res=>{
        })
}
else{
  console.log("hhhhiii");
  console.log(this.myDay); 
  // this.settingDayRef.set(hoursFriday.hoursMorning);
  this.myDay[0].hoursEvning=hoursFriday.hoursEvning;
  this.myDay[0].hoursMorning=hoursFriday.hoursMorning;
  //  this.settingDayRef.doc('Sunday').update(hoursSunday.hoursEvning);
  console.log(this.myDay); 
}
this.flag=0; 
}
}


  




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



// uploadImage(image) {
//   let storageRef = firebase.storage().ref();
//   return storageRef.put(image);
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

