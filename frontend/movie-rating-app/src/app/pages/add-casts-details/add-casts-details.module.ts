import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCastsDetailsPageRoutingModule } from './add-casts-details-routing.module';

import { AddCastsDetailsPage } from './add-casts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCastsDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddCastsDetailsPage]
})
export class AddCastsDetailsPageModule {}
