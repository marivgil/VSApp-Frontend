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


@NgModule({
  declarations: [
    AppComponent,
    HomeEcologyComponent,
    NavbarComponent,
    ProfileComponent,
    ReceptionCentersComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [ReceptionCentersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
