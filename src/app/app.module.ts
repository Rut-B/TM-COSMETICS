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
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { SettingComponent } from './setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatInputModule, MatCardModule } from "@angular/material";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from "./auth.service";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from "angularfire2/firestore";



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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    AngularFireAuthModule,
    MatCardModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    CalendarModule.forRoot()

  ],
  providers: [
    NavService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}