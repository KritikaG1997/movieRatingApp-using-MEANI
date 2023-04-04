import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCastsDetailsPage } from './add-casts-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddCastsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCastsDetailsPageRoutingModule {}
