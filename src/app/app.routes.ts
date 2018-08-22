import {RouterModule, Routes} from "@angular/router";
import { HomeEcologyComponent } from './components/homeEcology/homeEcology.component';

const APP_ROUTES: Routes = [
  { path: 'homeEcology', component: HomeEcologyComponent },
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
