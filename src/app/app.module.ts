
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
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
import { SettingComponent } from './setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatTableDataSource,MatFormFieldModule,MatInputModule,MatSelectModule, MatCardModule } from "@angular/material";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from "./auth.service";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule} from "angularfire2/firestore";
import { HttpModule } from '@angular/http';
import {MatTableModule} from '@angular/material/table';
import { CosmeticianCalendarComponent } from './cosmetician-calendar/cosmetician-calendar.component';
import { CommonModule } from '@angular/common';
import{CalendarMessageService}from './calendar-message.service';
import * as firebase from 'firebase';
import {DatabaseFirebaseService} from './database-firebase.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import { AngularFirestore } from "angularfire2/firestore";
import {GuardAuthGuard}from './guard-auth.guard'

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
    StoreComponent,
    DetailsComponent,
    HomeComponent,
    CosmeticianSettingsComponent,
    CosmeticianProductsComponent,
    NavComponentComponent,
    LoginComponent,
    ProfileComponent,
    SettingComponent,
    CosmeticianCalendarComponent
  ],
  imports: [
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    AngularFireAuthModule,
    MatCardModule,
    NoopAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    CalendarModule.forRoot(),
    CommonModule,
    MatProgressSpinnerModule

  ],
  providers: [
    NavService,
    AuthService,
    CalendarMessageService,
    DatabaseFirebaseService,
    GuardAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}