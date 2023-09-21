import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: HeaderComponent,
  //   children: [
  //     // {
  //     //   path: 'home',
  //     //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  //     // },
  //     {
  //       path: 'login',
  //       loadChildren: () => import('./imra-login/imra-login.module').then(m => m.ImraLoginPageModule)
  //     },
  //     {
  //       path: 'forgot',
  //       loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotPageModule)
  //     },
  //     {
  //       path: 'profile',
  //       loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  //     },
  //     {
  //       path: 'registration',
  //       loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  //     }
  //   ]
  // },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./imra-login/imra-login.module').then(m => m.ImraLoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'conditions',
    loadChildren: () => import('./conditions-and-privacy/conditions-and-privacy.module').then(m => m.ConditionsAndPrivacyPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./welcom/welcom.module').then(m => m.WelcomPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
