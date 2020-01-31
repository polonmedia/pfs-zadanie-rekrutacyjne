import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './sys/auth-guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(mod => mod.FeaturesModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
