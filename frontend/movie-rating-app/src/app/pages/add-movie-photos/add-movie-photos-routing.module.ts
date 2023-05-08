import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMoviePhotosPage } from './add-movie-photos.page';

const routes: Routes = [
  {
    path: '',
    component: AddMoviePhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMoviePhotosPageRoutingModule {}
