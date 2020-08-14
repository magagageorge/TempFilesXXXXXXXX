import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './ads.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', component: AdsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/:creation', component: CreateComponent },  
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }

export const routedComponents = [AdsComponent, CreateComponent, EditComponent];
