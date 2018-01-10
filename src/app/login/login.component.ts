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

  constructor(public authService: AuthService,
    public router: Router) {
     }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle();
    this.router.navigate(["home"])
  } 

}
