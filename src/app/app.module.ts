import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';




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
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { SettingComponent } from './setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBj9XabgD32Wi2qUrKm7AZo4ZjQErXFKRo",
    authDomain: "tmcosm-48ed4.firebaseapp.com",
    databaseURL: "https://tmcosm-48ed4.firebaseio.com",
    projectId: "tmcosm-48ed4",
    storageBucket: "tmcosm-48ed4.appspot.com",
    messagingSenderId: "557253961976"
  }
};



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
    LoginComponent,
    ProfileComponent,
    InfoComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}