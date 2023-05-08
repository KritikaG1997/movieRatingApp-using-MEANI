import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMoviePhotosPageRoutingModule } from './add-movie-photos-routing.module';

import { AddMoviePhotosPage } from './add-movie-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMoviePhotosPageRoutingModule
  ],
  declarations: [AddMoviePhotosPage]
})
export class AddMoviePhotosPageModule {}
