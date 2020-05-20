import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsManagerComponent } from './ads-manager.component';
import { AuthGuard } from '@app/services/auth-guard.service';


const routes: Routes = [
  { path: '', component: AdsManagerComponent },
  {
    path: 'accounts',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: './accounts/accounts.module#AccountsModule'
  },
  {
    path: 'ads',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: './ads/ads.module#AdsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsManagerRoutingModule { }

export const routedComponents = [AdsManagerComponent]
