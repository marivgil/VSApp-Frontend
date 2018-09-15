import {RouterModule, Routes} from "@angular/router";
import { HomeEcologyComponent } from './components/homeEcology/homeEcology.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {ReceptionCentersComponent} from "./components/reception.centers/reception.centers.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeEducationComponent} from "./components/home-education/home-education.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuardService} from "./auth-guard.service";
import {HomeStreetComponent} from "./components/home-street/home-street.component";

const APP_ROUTES: Routes = [
  { path: 'homeEcology', component: HomeEcologyComponent, canActivate: [AuthGuardService] ,
    children: []},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'homeEcology/receptionCenters', component: ReceptionCentersComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'homeEcology/education', component: HomeEducationComponent, canActivate: [AuthGuardService]},
  { path: 'homeStreet', component: HomeStreetComponent, canActivate: [AuthGuardService]},
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
