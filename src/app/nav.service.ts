import { Injectable } from '@angular/core';
import * as myGlobals from './globals';
@Injectable()
export class NavService {
    public navItems: NavItem[];
  
constructor() {
  if (myGlobals.customer){
    this.navItems=[
      new NavItem("settings","settings",'/assets/setting.png'),
      new NavItem("information","information",'/assets/inf4.png'),
      new NavItem("store","store",'/assets/store.png'),
      new NavItem("calendar","calendar",'/assets/cal.png'),
      new NavItem("about","about",'/assets/about.png'),
      new NavItem("instagram","instagram",'/assets/ins.png')
    ]
  }
  else{
    this.navItems=[
      new NavItem("settings","cosmetician-settings",'/assets/setting.png'),
      new NavItem("store","cosmetician-products",'/assets/store.png'),
      new NavItem("calendar","calendar",'/assets/cal.png')
    ]
  }

   }
}
  export class NavItem{
    constructor(public text:string, public url:string, public image:string){
    }
  
  }
