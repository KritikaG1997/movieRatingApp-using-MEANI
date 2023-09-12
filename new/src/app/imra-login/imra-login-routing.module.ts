import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImraLoginPage } from './imra-login.page';

const routes: Routes = [
  {
    path: '',
    component: ImraLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImraLoginPageRoutingModule {}
