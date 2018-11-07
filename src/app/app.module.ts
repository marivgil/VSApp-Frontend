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
import {AuthGuardService} from "./auth-guard.service";
import {UserService} from "./user.service";
import {FooterComponent} from "./components/footer/footer.component";
import {RequestStreetService} from "./components/request-street/request-street.service";
import { HttpClientModule } from '@angular/common/http';
import { HomeSedeComponent } from './components/home-sede/home-sede.component';
import {RequestStreetComponent} from "./components/request-street/request-street.component";
import {HomeStreetComponent} from "./components/home-street/home-street.component";
import { GetRequestsComponent } from './components/get-requests/get-requests.component';
import {GetRequestsService} from "./components/get-requests/get-requests.service";
import { HomeReceptionCentersComponent } from './components/home-reception-centers/home-reception-centers.component';
import { HomeHospitalsComponent } from './components/home-hospitals/home-hospitals.component';
import { LoadSuppliesHospitalsComponent } from './components/load-supplies-hospitals/load-supplies-hospitals.component';
import { GetSuppliesHospitalsComponent } from './components/get-supplies-hospitals/get-supplies-hospitals.component';
import {HospitalsService} from "./components/home-hospitals/hospitals.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "ng2-toastr";
import 'hammerjs';
import {NgxHmCarouselModule} from "ngx-hm-carousel";
import { ClothingComponent } from './components/request-street/clothing/clothing.component';
import { ClothingMatrixComponent } from './components/request-street/clothing-matrix/clothing-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEcologyComponent,
    NavbarComponent,
    ProfileComponent,
    ReceptionCentersComponent,
    LoginComponent,
    HomeEducationComponent,
    HomeComponent,
    HomeStreetComponent,
    FooterComponent,
    HomeSedeComponent,
    RequestStreetComponent,
    GetRequestsComponent,
    HomeReceptionCentersComponent,
    HomeHospitalsComponent,
    LoadSuppliesHospitalsComponent,
    GetSuppliesHospitalsComponent,
    ClothingComponent,
    ClothingMatrixComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    NgxHmCarouselModule,
  ],
  providers: [
    ReceptionCentersService,
    AuthService,
    AuthGuardService,
    UserService,
    RequestStreetService,
    GetRequestsService,
    HospitalsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
