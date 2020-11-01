import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsManagerComponent } from './ads-manager.component';
import { AuthGuard } from '@app/services/auth-guard.service';


const routes: Routes = [
  { path: '', component: AdsManagerComponent },
  {
    path: 'accounts',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'compaigns',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./ads/ads.module').then(m => m.AdsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsManagerRoutingModule { }

export const routedComponents = [AdsManagerComponent]
