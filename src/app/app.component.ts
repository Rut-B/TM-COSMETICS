import { Component } from '@angular/core';

export var var1:string = 'a';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})






export class AppComponent {
  title = 'app';
public user_login;
  
  constructor(){
    //alert("in app");
    this.user_login =false;
  }

}
