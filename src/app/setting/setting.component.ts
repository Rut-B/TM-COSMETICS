import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
public  abc;
public customerRef;


  constructor(public auth:AuthService,private afs:AngularFirestore) {
   }

  ngOnInit() {
    
  }

  public save_new_settings(){

  
   let new_first_name= (<HTMLInputElement>document.getElementById('new_first_name')).value;
   let new_last_name= (<HTMLInputElement>document.getElementById('new_first_name')).value;
   let new_address= (<HTMLInputElement>document.getElementById('new_first_name')).value;
   let new_phone= (<HTMLInputElement>document.getElementById('new_first_name')).value;
   let id;
   let current_email=this.auth.current_user.email;
   let users = this.auth.users_details;

        for (let i = 0; i < users.length; i++) {
          if ((users[i].email == current_email)) {
          id=users[i];
          }
        }             
   this.customerRef.set(`/USER/${id}`, {address : new_address, first_name:new_first_name, last_name: new_last_name, phone: new_phone }); 
   
   /*
   let inputFields = document.ATTRIBUTE_NODE.valueOf();
    console.log(inputFields);
    console.log(document.ATTRIBUTE_NODE);*/
}
  
}
