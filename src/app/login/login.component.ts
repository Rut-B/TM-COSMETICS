import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {Router} from "@angular/router";
import * as navs from '../nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public x;
public myIndex = 0;
public arr = document.getElementsByClassName("a1") as HTMLCollectionOf<HTMLElement>;
  constructor(public authService: AuthService,public router: Router) {
    
     }
    //  carousel();
    //  carousel(){
    //   var j;
    //   // var y = document.getElementsByClassName("a1");
    //   for (j = 0; j < this.arr.length;j++) {
    //     this.arr[j].style.display = "none";   
    //  }
    //  this.myIndex++;
    //  if (this.myIndex > this.arr.length) {this.myIndex = 1} 
    //  this.arr[this.myIndex-1].style.display = "block"; 
    //  setTimeout(this.carousel, 2000);
    //  }

     public slideIndex = 1;
    
    plusDivs(n) {
     
      this.showDivs(this.slideIndex += n);
    }

    showDivs(n) {
      var i=0;
      
      
      if (n > this.arr.length) {this.slideIndex = 1}    
      if (n < 1) {this.slideIndex = this.arr.length}
      for (i = 0; i < this.arr.length; i++) {
       
        this.arr[i].style.display="none";
        
     }
     this.arr[this.slideIndex-1].style.display="block";
    }


  ngOnInit() {
  }

  async  loginWithGoogle(){
    await this.authService.loginWithGoogle();
    this.router.navigate(["home"])
    
  } 

}
