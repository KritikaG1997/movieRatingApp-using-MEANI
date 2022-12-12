import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleAuthenticationPageRoutingModule } from './google-authentication-routing.module';

import { GoogleAuthenticationPage } from './google-authentication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleAuthenticationPageRoutingModule
  ],
  declarations: [GoogleAuthenticationPage]
})
export class GoogleAuthenticationPageModule {}
