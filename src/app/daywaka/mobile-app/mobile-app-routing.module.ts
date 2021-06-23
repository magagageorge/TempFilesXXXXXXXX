import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DwJobsComponent } from './components/dw-jobs/dw-jobs.component';
import { DwMobileAppGetStartedPageComponent } from './components/dw-mobile-app-get-started-page/dw-mobile-app-get-started-page.component';
import { DwMobileAppSingupComponent } from './components/dw-mobile-app-singup/dw-mobile-app-singup.component';
import { DwMobileAppWelcomeComponent } from './components/dw-mobile-app-welcome/dw-mobile-app-welcome.component';
import { DwMobileLoginComponent } from './components/dw-mobile-login/dw-mobile-login.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { NearByJobsComponent } from './components/near-by-jobs/near-by-jobs.component';
import { MobileAppComponent } from './mobile-app.component';

const routes: Routes = [
  { path: '', component: MobileAppComponent },
  { path: 'dw-mb-login', component: DwMobileLoginComponent },
  { path: 'dw-mb-signup', component: DwMobileAppSingupComponent },
  { path: 'dw-mb-getstarted', component: DwMobileAppGetStartedPageComponent },
  { path: 'welcome', component: DwMobileAppWelcomeComponent },
  { path: 'dashboard', component: DwJobsComponent },
  { path: 'nearby', component: NearByJobsComponent },
  { path: 'myjobs', component: MyJobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view/:id', component: JobDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppRoutingModule { }

export const routedComponents = [DwJobsComponent, NearByJobsComponent, DashboardComponent, JobDetailsComponent, MyJobsComponent, DwMobileAppWelcomeComponent, DwMobileLoginComponent, DwMobileAppGetStartedPageComponent, DwMobileAppSingupComponent]
