import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ImportComponent } from './import/import.component';
import { InviteComponent } from './invite/invite.component';
import { ConnectComponent } from './connect/connect.component';

const routes: Routes = [
  { path:'',component:ContactsComponent},
  { path:'import',component:ImportComponent},
  { path:'connect',component:ConnectComponent},
  { path:'invite',component:InviteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

export const routedComponents=[ContactsComponent,ImportComponent,ConnectComponent,InviteComponent];
