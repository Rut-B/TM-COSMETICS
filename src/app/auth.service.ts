import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import * as navs from './nav.service';


export  class USER {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone: number;
  is_customer: boolean;
}




@Injectable()
export class AuthService {
  private users_list: AngularFirestoreCollection<any>;
  private _user;
  private users_details: USER[];
  public current_user: USER;
  public isLogin: boolean = false;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public router: Router) {
    this.current_user = new USER;
    this.users_list = this.afs.collection("USERS");
    this.users_list.valueChanges().subscribe(res => {
      this.users_details = res;
    });
  }

  public exist_user(email: string) {

    for (let i = 0; i < this.users_details.length; i++) {
      if ((this.users_details[i].email == email)) {
        //if exist create public user
        //? how do new corrent_user?
        
        this.current_user.address = this.users_details[i].address;
        this.current_user.first_name = this.users_details[i].first_name;
        this.current_user.last_name = this.users_details[i].last_name;
        this.current_user.email = this.users_details[i].email;
        this.current_user.is_customer = this.users_details[i].is_customer;
        this.current_user.phone = this.users_details[i].phone;
        return true;
      }

    }
    return false;
  }


  public loginWithGoogle() {
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()).then(user => {
          let verify = user.additionalUserInfo.profile.verified_email;
          if (verify) {
            let email = user.additionalUserInfo.profile.email;
            if (this.exist_user(email)) {
              this.isLogin = true;
              res(true)
            }
            else {
              this.isLogin = false;

              res(false);
            }
          }

        });
    });
  }
  public get login_success() {
    console.log("get login" + this.isLogin);
    return this.isLogin;
  }

  public loginWIthEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {

      });

  }

  public signupWithEmail(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
  }

  /*public isLogin() {
    console.log(!!this.afAuth.auth.currentUser)
    return !!this.afAuth.auth.currentUser;
  }*/

  public get nameAndFname() {
    return this._user ? this._user.displayName : "guest";
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}

