import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { CosmeticianSettingsComponent } from './cosmetician-settings/cosmetician-settings.component';
import { CosmeticianProductsComponent } from './cosmetician-products/cosmetician-products.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import {NavService} from './nav.service'

export const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "calendar", component: CalendarComponent },
    { path: "store", component: StoreComponent},
    { path: "about", component: AboutComponent },
    { path: "cosmetician-products", component: CosmeticianProductsComponent},
    { path: "cosmetician-settings", component: CosmeticianSettingsComponent },
    { path: "details", component: DetailsComponent},
    { path: "**", redirectTo: "home" }
];

