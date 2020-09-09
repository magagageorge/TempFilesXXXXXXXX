import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './ads.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { EditCompaignAdComponent } from './edit-compaign-ad/edit-compaign-ad.component';

const routes: Routes = [
  { path: '', component: AdsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/:creation', component: CreateComponent }, 
  { path: 'create/:creation/:currentForm', component: CreateComponent },  
  { path: 'edit/:edition', component: EditComponent },
  { path: 'edit/:edition/ad', component: EditCompaignAdComponent },  
  { path: 'edit/:edition/ad/:edit_ad', component: EditCompaignAdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }

export const routedComponents = [AdsComponent, CreateComponent, EditComponent,EditCompaignAdComponent];
