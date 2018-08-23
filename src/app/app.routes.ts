import {RouterModule, Routes} from "@angular/router";
import { HomeEcologyComponent } from './components/homeEcology/homeEcology.component';
import {ProfileComponent} from "./components/profile/profile.component";

const APP_ROUTES: Routes = [
  { path: 'homeEcology', component: HomeEcologyComponent },
  { path: 'profile', component: ProfileComponent },
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
