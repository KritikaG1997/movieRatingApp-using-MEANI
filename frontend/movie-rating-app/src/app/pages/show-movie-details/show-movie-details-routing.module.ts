import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMovieDetailsPage } from './show-movie-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMovieDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMovieDetailsPageRoutingModule {}
