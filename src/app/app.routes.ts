import {RouterModule, Routes} from "@angular/router";
import { HomeEcologyComponent } from './components/homeEcology/homeEcology.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {ReceptionCentersComponent} from "./components/reception.centers/reception.centers.component";
import {LoginComponent} from "./components/login/login.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

const APP_ROUTES: Routes = [
  { path: 'homeEcology', component: HomeEcologyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'homeEcology/receptionCenters', component: ReceptionCentersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: NavbarComponent},
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
