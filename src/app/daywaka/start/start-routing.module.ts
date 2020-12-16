import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstJobComponent } from './first-job/first-job.component';

const routes: Routes = [
  { path: '', component: FirstJobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }

export const routedComponents = [FirstJobComponent];
