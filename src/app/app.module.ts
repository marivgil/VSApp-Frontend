import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeEcologyComponent } from './components/homeEcology/homeEcology.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {APP_ROUTING} from "./app.routes";
import { ProfileComponent } from './components/profile/profile.component';
import { ReceptionCentersComponent } from './components/reception.centers/reception.centers.component';
import { ReceptionCentersService } from './components/reception.centers/reception.centers.service';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgxPaginationModule} from "ngx-pagination";
import { LoginComponent } from './components/login/login.component';
import {AuthService} from "./auth.service";
import { HomeEducationComponent } from './components/home-education/home-education.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeEcologyComponent,
    NavbarComponent,
    ProfileComponent,
    ReceptionCentersComponent,
    LoginComponent,
    HomeEducationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [
    ReceptionCentersService,
    AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
