import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/services/auth-guard.service';
import { DwFindWorkComponent } from './daywaka-theme/components/pages/dw-find-work/dw-find-work.component';
import { DwFindWorkersComponent } from './daywaka-theme/components/pages/dw-find-workers/dw-find-workers.component';
import { DaywakaComponent } from './daywaka.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mobile-app/mobile-app.module').then(m => m.MobileAppModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaywakaRoutingModule { }
