import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import * as myGlobals from './globals';
@Injectable()
export class NavService 
{
    public navItems: NavItem[];
  
constructor(private auth:AuthService) 
{
  if(auth.isLogin){

  
  if (auth.current_user.is_customer)
  {
    this.navItems=[
      new NavItem("settings","settings",'/assets/6.png'),
      new NavItem("information","information",'/assets/2.png'),
      new NavItem("store","store",'/assets/3.png'),
      new NavItem("calendar","calendar",'/assets/4.png'),
      new NavItem("profile","profile",'/assets/5.png'),
     
    ]
  }
  else
  {
    this.navItems=[
      new NavItem("settings","cosmetician-settings",'/assets/6.png'),
      new NavItem("store","cosmetician-products",'/assets/3.png'),
      new NavItem("calendar","cosmetician-calendar",'/assets/4.png')
    ]
  }
}
 }


 public create_nav(){
 if (this.auth.current_user.is_customer)
  {
    this.navItems=[
      new NavItem("settings","settings",'/assets/6.png'),
      new NavItem("information","information",'/assets/2.png'),
      new NavItem("store","store",'/assets/3.png'),
      new NavItem("calendar","calendar",'/assets/4.png'),
      new NavItem("profile","profile",'/assets/5.png'),
      new NavItem("instagram","instagram",'/assets/ins.png'),
    ]
  }
  else
  {
    this.navItems=[
      new NavItem("settings","cosmetician-settings",'/assets/6.png'),
      new NavItem("store","cosmetician-products",'/assets/3.png'),
      new NavItem("calendar","cosmetician-calendar",'/assets/4.png')
    ]
  }

    }
  

}

  export class NavItem
  {
    constructor(public text:string, public url:string, public image:string)
    {
    }
   
  }
