import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service'
import {Router} from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {DatabaseFirebaseService} from '../database-firebase.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
public  abc;



  constructor(public auth:AuthService,private afs:AngularFirestore,public router: Router,public df:DatabaseFirebaseService) {
  
  }

  ngOnInit() {
    
  }

  public save_new_settings(){

  
   let new_first_name= (<HTMLInputElement>document.getElementById('new_first_name')).value;
   let new_last_name= (<HTMLInputElement>document.getElementById('new_last_name')).value;
   let new_address= (<HTMLInputElement>document.getElementById('new_address')).value;
   let new_phone= (<HTMLInputElement>document.getElementById('new_phone')).value;
   let id;
   let current_email=this.auth.current_user.email;
   let users = this.auth.users_details;

        let cons = {
          email: this.auth.current_user.email,
          first_name:new_first_name,
          last_name: new_last_name,
          phone:     new_phone,
          address: new_address,
          is_customer: true
        }

      var setDoc =this.df.customerRef.doc(this.auth.current_user.email).set(cons);//to set RUT!!
      this.auth.current_user.address=new_address;
      this.auth.current_user.first_name=new_first_name;
      this.auth.current_user.last_name=new_last_name;
      this.auth.current_user.phone =Number(new_phone) ;

console.log()
        this.router.navigate(["home"]);
  
}
  
}
