import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionsAndPrivacyPage } from './conditions-and-privacy.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionsAndPrivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionsAndPrivacyPageRoutingModule {}
