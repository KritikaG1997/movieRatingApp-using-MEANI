import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionsAndPrivacyPageRoutingModule } from './conditions-and-privacy-routing.module';

import { ConditionsAndPrivacyPage } from './conditions-and-privacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionsAndPrivacyPageRoutingModule
  ],
  declarations: [ConditionsAndPrivacyPage]
})
export class ConditionsAndPrivacyPageModule {}
