import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPagesComponent } from './components/my-pages/my-pages.component';
import { WoorbiPagesComponent } from './pages.component';


const routes: Routes = [
  { path: '', component: WoorbiPagesComponent },
  { path: '', component: MyPagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoorbiPagesRoutingModule { }

export const routed_components=[MyPagesComponent,WoorbiPagesComponent];
