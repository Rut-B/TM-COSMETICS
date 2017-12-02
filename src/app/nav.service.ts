import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
    public navItems: NavItem[];
  
constructor() {
    this.navItems=[
      new NavItem("settings","settings",'/assets/setting.png'),
      new NavItem("information","information",'/assets/inf4.png'),
      new NavItem("store","store",'/assets/store.png'),
      new NavItem("calendar","calendar",'/assets/cal.png'),
      new NavItem("about","about",'/assets/about.png'),
      new NavItem("instagram","instagram",'/assets/ins.png')
    ]
    } 
}
  export class NavItem{
    constructor(public text:string, public url:string, public image:string){
    }
  
  }
