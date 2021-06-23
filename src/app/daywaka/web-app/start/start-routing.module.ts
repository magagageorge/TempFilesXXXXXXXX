import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/services/auth-guard.service';
import { FirstJobComponent } from './first-job/first-job.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { NewBusinessPageComponent } from './new-business-page/new-business-page.component';

const routes: Routes = [
  { path: '', component: GuestFormComponent },
  { path: 'new-business',canActivate: [AuthGuard], component: NewBusinessPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }

export const routedComponents = [GuestFormComponent,FirstJobComponent,NewBusinessPageComponent];
