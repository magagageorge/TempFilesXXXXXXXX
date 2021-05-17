import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwJobsRoutingModule, routedComponents } from './dw-jobs-routing.module';
import { DaywakaThemeModule } from '../daywaka-theme/daywaka-theme.module';
import { WbGoogleMapsModule } from '@app/libs/wb-google-maps/wb-google-maps.module';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { DwJobActionsBarComponent } from './widgets/dw-job-actions-bar/dw-job-actions-bar.component';


@NgModule({
  declarations: [...routedComponents, DwJobActionsBarComponent],
  imports: [
    CommonModule,
    DwJobsRoutingModule, 
    DaywakaThemeModule,
    WbGoogleMapsModule
  ]
})
export class DwJobsModule { }
