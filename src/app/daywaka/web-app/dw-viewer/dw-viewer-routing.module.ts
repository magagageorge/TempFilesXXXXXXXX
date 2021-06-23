import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwViewerComponent } from './dw-viewer.component';

const routes: Routes = [
  {path:'',component:DwViewerComponent},
  {path:'**',component:DwViewerComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwViewerRoutingModule { }

export const routedComponents=[DwViewerComponent];

