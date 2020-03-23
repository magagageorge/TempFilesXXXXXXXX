import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadComponent } from './thread.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {
    path: 'new', component: NewComponent
  },
  {
    path: ':id', component: ThreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadRoutingModule { }

export const routedComponents = [ThreadComponent, NewComponent];
