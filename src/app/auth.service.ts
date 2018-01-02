import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';
import * as navs from './nav.service';


export class USER {
  first_name: string;
  last_name: string;
  email: string;
  address:string;
  phone:number;
  is_customer:boolean;
}

export var isLogin:boolean = false;
export var corrent_user:USER;

@Injectable()
export class AuthService {
  private users_list:AngularFirestoreCollection<any>;
  private _user;
  private users_details:USER[];

  constructor(public afAuth: AngularFireAuth,public afs:AngularFirestore, public router: Router) {  
    this.users_list=this.afs.collection("USERS"); 
    this.users_list.valueChanges().subscribe(res=>{
      this.users_details=res;
    });
  }

   public exist_user(email:string,first_name:string,last_name:string)
  {

    for(var i=0;i<this.users_details.length;i++)
    {
        if((this.users_details[i].email==email)&&(this.users_details[i].first_name==first_name)&&(this.users_details[i].last_name==last_name))
        {
         //if exist create public user
         //? how do new corrent_user?
          corrent_user = new USER();
          corrent_user.address=this.users_details[i].address;
          corrent_user.first_name=this.users_details[i].first_name;
          corrent_user.last_name=this.users_details[i].last_name;
          corrent_user.email=this.users_details[i].email;
          corrent_user.is_customer=this.users_details[i].is_customer;
          corrent_user.phone=this.users_details[i].phone;
          
          return true;
        }

    }
    return false;
  }


  public loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(  
    new firebase.auth.GoogleAuthProvider()).then(user => {
    console.log(user.isLogin);
    var verify= user.additionalUserInfo.profile.verified_email;

    if(verify){
      
    var first_name= user.additionalUserInfo.profile.given_name;
    var last_name = user.additionalUserInfo.profile.family_name;
    var email = user.additionalUserInfo.profile.email;
    alert("in login"+first_name+last_name+email);
    if(this.exist_user(email,first_name,last_name))
    {
    isLogin= true;

    alert("exist");
    this.router.navigate(["home"]);
    return true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    //add new user.
    //this.router.navigate(["add_customer"]);
    }
    else{
    return false;
    }
  
      }  
      });
      return true;
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




