import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import * as user_details from './globals';
import * as firebase from 'firebase/app';


@Injectable()

export class AuthService {
  public first_name;
  public last_name;
  public  email:string;
 

  private users_list:AngularFirestoreCollection<any>;
  

  private _user;
  private user_colc:AngularFirestoreCollection<any>;
  private users_details:USER[];
  
  constructor(public afAuth: AngularFireAuth,public afs:AngularFirestore) { 

    this.users_list=this.afs.collection("USERS"); 
    alert( this.users_list);
    this.users_list.valueChanges().subscribe(res=>{
      this.users_details=res;
      alert(res);
    });
  }

  public exist_user(email:string,name:string){
    return true;
    
    }


  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(  
    new firebase.auth.GoogleAuthProvider()).then(user => {
    console.log(user.isLogin);
    var verify= user.additionalUserInfo.profile.verified_email;

    if(verify){
    this.first_name= user.additionalUserInfo.profile.first_name;
    this.last_name = user.additionalUserInfo.profile.given_name;
    this.email = user.additionalUserInfo.profile.mail;
    
    //check what the status:
    
        }
        else{

        }
       /* if(exist_user(name,mail)){
          //check if exist:
         
        }
        
        else{//join to service

        }*/
       // this._user = user.user;
       // console.log(user.user.additionalUserInfo.profile.verified_email);
        
      });
  }

  public loginWIthEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {

      });
  }

  public signupWithEmail(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      console.log(res);
    })
  }

  public isLogin() {
    console.log(!!this.afAuth.auth.currentUser)
    return !!this.afAuth.auth.currentUser;
  }

  public get nameAndFname() {
    return this._user ? this._user.displayName : "guest";
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}



export interface USER {
  first_name: string;
  last_name: string;
  email: string;
  address:string;
  phone:number;
  is_cosmetic:boolean;
}
