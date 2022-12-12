import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleAuthenticationPage } from './google-authentication.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleAuthenticationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleAuthenticationPageRoutingModule {}
