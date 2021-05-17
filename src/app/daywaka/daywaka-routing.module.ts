import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/services/auth-guard.service';
import { DwFindWorkComponent } from './daywaka-theme/components/pages/dw-find-work/dw-find-work.component';
import { DwFindWorkersComponent } from './daywaka-theme/components/pages/dw-find-workers/dw-find-workers.component';
import { DaywakaComponent } from './daywaka.component';

const routes: Routes = [
  {
    path: '', component: DaywakaComponent
  },
  {
    path: 'find-work', component: DwFindWorkComponent
  },
  {
    path: 'find-workers', component: DwFindWorkersComponent
  },
  {
    path: 'dw-get-started',
    loadChildren: () => import('./start/start.module').then(m => m.StartModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./dw-jobs/dw-jobs.module').then(m => m.DwJobsModule)
  },
  {
    path: 'myprofile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule)
  },
  {
    path: ':dwurl/:dwurl_page/:dwurl_action/view-profile/:view_profileId',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./dw-viewer/dw-viewer.module').then(m => m.DwViewerModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: ':dwurl/:dwurl_page/:dwurl_action',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./dw-viewer/dw-viewer.module').then(m => m.DwViewerModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: ':dwurl/:dwurl_page',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./dw-viewer/dw-viewer.module').then(m => m.DwViewerModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: ':dwurl',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./dw-viewer/dw-viewer.module').then(m => m.DwViewerModule),
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaywakaRoutingModule { }
