import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImraLoginPageRoutingModule } from './imra-login-routing.module';

import { ImraLoginPage } from './imra-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImraLoginPageRoutingModule
  ],
  declarations: [ImraLoginPage]
})
export class ImraLoginPageModule {}
