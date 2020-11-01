import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';


const routes: Routes = [
  {
    path: 'thread',
    loadChildren: () => import('./thread/thread.module').then(m => m.ThreadModule)
  },
  {path:'',component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }

export const routedComponents=[MessagesComponent];
