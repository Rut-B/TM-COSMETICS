import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{AuthService} from './auth.service'
import { Router } from "@angular/router";
@Injectable()
export class GuardAuthGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.auth.login_success);
    return true;
   /*if(this.auth.login_success)
   {
    this.router.navigate(["home"]);
    return true;
  }

  return false;*/

  /* else
   this.router.navigate(['/add user']);
    //git push origin HEAD:master*/
  }
  
}
