import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  private _user;

  constructor(public afAuth: AngularFireAuth) { }

  public exist_user(email:string,name:string){
    return true;

    }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(user => {
        console.log(user.isLogin);
        var name =user.additionalUserInfo.profile.name;
        var mail= user.additionalUserInfo.profile.mail;
       /* if(exist_user(name,mail)){
          //check if exist:
         
        }
        
        else{//join to service

        }*/
        this._user = user.user;
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
