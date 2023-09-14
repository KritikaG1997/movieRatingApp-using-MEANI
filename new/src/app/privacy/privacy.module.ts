import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPageRoutingModule } from './privacy-routing.module';

import { PrivacyPage } from './privacy.page';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPageRoutingModule
  ],
  declarations: [PrivacyPage, BackToTopComponent, HeaderComponent]
})
export class PrivacyPageModule {}
