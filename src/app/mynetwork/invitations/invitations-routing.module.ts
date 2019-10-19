import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitationsComponent } from './invitations/invitations.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [{
  path:'',component:InvitationsComponent
},
{path:'sent',component:SentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationsRoutingModule { }
export const routedComponents=[InvitationsComponent,SentComponent];
