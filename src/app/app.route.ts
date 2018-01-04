import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { CosmeticianSettingsComponent } from './cosmetician-settings/cosmetician-settings.component';
import { CosmeticianProductsComponent } from './cosmetician-products/cosmetician-products.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import {NavService} from './nav.service'
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CosmeticianCalendarComponent } from './cosmetician-calendar/cosmetician-calendar.component';
import {GuardAuthGuard}from './guard-auth.guard'

export const appRoutes: Routes = [

   
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "home", canActivate: [GuardAuthGuard], component:HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "calendar", component: CalendarComponent },
    { path: "store", component: StoreComponent},
    { path: "cosmetician-products", component: CosmeticianProductsComponent},
    { path: "cosmetician-settings", component: CosmeticianSettingsComponent },
    { path: "cosmetician-calendar", component: CosmeticianCalendarComponent },
    { path: "details", component: DetailsComponent},
    { path: "settings", component: SettingComponent},
    { path: "information", component: DetailsComponent},
    { path: "profile", component: ProfileComponent},
    { path: "**", redirectTo: "login" }
];

