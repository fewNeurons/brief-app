import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'

// Redirects :
const unauthorizedToLogin = _=> redirectUnauthorizedTo([''])
const loggedInToHome = _=> redirectLoggedInTo(['home'])

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule),
    ...canActivate((loggedInToHome))
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule),
    ...canActivate((loggedInToHome))
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule),
    ...canActivate((unauthorizedToLogin))
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
