import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },


  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then(m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepagePageModule)
  },
  {
    path: 'add-movies',
    loadChildren: () => import('./pages/add-movies/add-movies.module').then(m => m.AddMoviesPageModule)
  },
  {
    path: 'edit-movie/:id',
    loadChildren: () => import('./pages/edit-movie/edit-movie.module').then(m => m.EditMoviePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'show-movie-details/:id',
    loadChildren: () => import('./pages/show-movie-details/show-movie-details.module').then(m => m.ShowMovieDetailsPageModule)
  },
  {
    path: 'google-authentication',
    loadChildren: () => import('./pages/google-authentication/google-authentication.module').then(m => m.GoogleAuthenticationPageModule)
  },
  {
    path: 'add-casts-details',
    loadChildren: () => import('./pages/add-casts-details/add-casts-details.module').then(m => m.AddCastsDetailsPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPagePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
