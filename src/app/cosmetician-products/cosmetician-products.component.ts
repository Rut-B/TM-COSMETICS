import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {DatabaseFirebaseService} from '../database-firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
export interface event{
  date: string;
  hoursEvning:string;
  hoursMorning:string;
}
export interface users{
  address: string;
  email:string;
  first_name:string;
  is_customer:boolean;
  last_name:string;
  phone_number:number;
  
}
@Component({
  selector: 'app-cosmetician-products',
  templateUrl: './cosmetician-products.component.html',
  styleUrls: ['./cosmetician-products.component.scss']
})
export class CosmeticianProductsComponent implements OnInit {
  private col:AngularFirestoreCollection<any>;
  private colUsers:AngularFirestoreCollection<any>;  
  public myUsers:users[];
  public picture:any;  
  
  public appointments:event[];
  public settingDaysRef;
  public users:users[];
  public usersRef;
 
 constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth ){
 
  this.settingDaysRef = this.afs.collection("Setting Days");  
  let res=this.settingDaysRef.valueChanges().subscribe(res=>{
  });
  this.col=this.afs.collection<event>("Setting Days"); 
  this.col.valueChanges(). subscribe(res=>{
      this.appointments=res;
    });
    this.usersRef = this.afs.collection("USERS");
    let res1=this.usersRef.valueChanges().subscribe(res1=>{
    });
    this.colUsers=this.afs.collection<event>("USERS"); 
    this.colUsers.valueChanges(). subscribe(res1=>{
        this.users=res1;
      });
      
      this.getPicture();      
  }
  a()
  {
    console.log(this.users);
    
    document.getElementById("allDays").style.display = "block"; 
    
  }
 
b()
{
            this.myUsers=[]; 
            for(var i=0,j=0;i<this.users.length;i++){
              if(this.users[i].is_customer){
              this.myUsers[j]=this.users[i];
              j++;
              }
            }
           console.log(this.myUsers);
            document.getElementById("allUsers").style.display = "block"; 
           
}
getPicture()
{
  if (this.afAuth.auth.currentUser)
  this.picture = this.afAuth.auth.currentUser.photoURL;
else
  this.picture = "";

}
  ngOnInit() {
  }
}
