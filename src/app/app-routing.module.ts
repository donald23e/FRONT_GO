import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },

  {
    path: 'advice',
    loadChildren: () => import('./advice/advice.module').then( m => m.AdvicePageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'challenge',
    loadChildren: () => import('./challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'create-group',
    loadChildren: () => import('./create-group/create-group.module').then( m => m.CreateGroupPageModule)
  },
  {
    path: 'join-group',
    loadChildren: () => import('./join-group/join-group.module').then( m => m.JoinGroupPageModule)
  },
  {
    path: 'team-main',
    loadChildren: () => import('./team-main/team-main.module').then( m => m.TeamMainPageModule)
  },
  {
    path: 'challenge-main',
    loadChildren: () => import('./challenge-main/challenge-main.module').then( m => m.ChallengeMainPageModule)
  },
  {
    path: 'me-progress/:id',
    loadChildren: () => import('./me-progress/me-progress.module').then( m => m.MeProgressPageModule)
  },
  {
    path: 'team-register/:id',
    loadChildren: () => import('./team-register/team-register.module').then( m => m.TeamRegisterPageModule)
  },
  {
    path: 'reto-modulo',
    loadChildren: () => import('./reto-modulo/reto-modulo.module').then( m => m.RetoModuloPageModule)
  },
  {
    path: 'cupon',
    loadChildren: () => import('./cupon/cupon.module').then( m => m.CuponPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
