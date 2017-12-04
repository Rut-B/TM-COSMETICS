import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CosmeticianSettingsComponent } from './cosmetician-settings/cosmetician-settings.component';
import { CosmeticianProductsComponent } from './cosmetician-products/cosmetician-products.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import {NavService} from './nav.service'
import { appRoutes } from "./app.route";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AboutComponent,
    StoreComponent,
    DetailsComponent,
    HomeComponent,
    CosmeticianSettingsComponent,
    CosmeticianProductsComponent,
    NavComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}