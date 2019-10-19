import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MynetworkComponent } from './mynetwork.component';
import { ConnectionsComponent } from './connections/connections.component';

const routes: Routes = [
{ path:'',component:MynetworkComponent},
{ path: 'invitations', 
  loadChildren: './invitations/invitations.module#InvitationsModule'
}, 
{ path: 'contacts', 
  loadChildren: './contacts/contacts.module#ContactsModule'
},
{ path:'connections',component:ConnectionsComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MynetworkRoutingModule { }

export const routedComponents=[MynetworkComponent,ConnectionsComponent];
