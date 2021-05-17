import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routed_components } from '@app/pages/woorbi-pages-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DwJobsComponent } from './components/dw-jobs/dw-jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { NearByJobsComponent } from './components/near-by-jobs/near-by-jobs.component';

const routes: Routes = [
  { path: '', component: DwJobsComponent },
  { path: 'nearby', component: NearByJobsComponent },
  { path: 'myjobs', component: MyJobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view/:id', component: JobDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwJobsRoutingModule { }

export const routedComponents = [DwJobsComponent, NearByJobsComponent, DashboardComponent, JobDetailsComponent, MyJobsComponent]
