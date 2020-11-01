import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MynetworkComponent } from './mynetwork.component';
import { ConnectionsComponent } from './connections/connections.component';

const routes: Routes = [
  { path: '', component: MynetworkComponent },
  {
    path: 'invitations',
    loadChildren: () => import('./invitations/invitations.module').then(m => m.InvitationsModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  { path: 'connections', component: ConnectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MynetworkRoutingModule { }

export const routedComponents = [MynetworkComponent, ConnectionsComponent];
