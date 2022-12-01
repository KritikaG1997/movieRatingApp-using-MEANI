import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMovieDetailsPageRoutingModule } from './show-movie-details-routing.module';

import { ShowMovieDetailsPage } from './show-movie-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMovieDetailsPageRoutingModule
  ],
  declarations: [ShowMovieDetailsPage]
})
export class ShowMovieDetailsPageModule {}
