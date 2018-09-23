import {RouterModule, Routes} from "@angular/router";
import { HomeEcologyComponent } from './components/homeEcology/homeEcology.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {ReceptionCentersComponent} from "./components/reception.centers/reception.centers.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeEducationComponent} from "./components/home-education/home-education.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuardService} from "./auth-guard.service";
import {HomeStreetComponent} from "./components/home-street/home-street.component";
import {RequestStreetComponent} from "./components/request-street/request-street.component";
import {HomeSedeComponent} from "./components/home-sede/home-sede.component";
import {GetRequestsComponent} from "./components/get-requests/get-requests.component";
import {HomeReceptionCentersComponent} from "./components/home-reception-centers/home-reception-centers.component";

const APP_ROUTES: Routes = [
  { path: 'homeEcology', component: HomeEcologyComponent, canActivate: [AuthGuardService] ,
    children: []},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'homeEcology/homeReceptionCenters/SearchCenter', component: ReceptionCentersComponent, canActivate: [AuthGuardService]},
  { path: 'homeEcology/homeReceptionCenters', component: HomeReceptionCentersComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'homeEcology/education', component: HomeEducationComponent, canActivate: [AuthGuardService]},
  { path: 'homeStreet', component: HomeStreetComponent, canActivate: [AuthGuardService]},
  { path: 'homeStreet/requestStreet', component: RequestStreetComponent, canActivate: [AuthGuardService]},
  { path: 'homeSede', component: HomeSedeComponent, canActivate: [AuthGuardService]},
  { path: 'homeSede/getRequests', component: GetRequestsComponent, canActivate: [AuthGuardService]},
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
