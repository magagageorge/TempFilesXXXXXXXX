import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaywakaRoutingModule } from './daywaka-routing.module';
import { DaywakaComponent } from './daywaka.component';
import { DaywakaThemeModule } from './daywaka-theme/daywaka-theme.module';
import { RouterModule } from '@angular/router';
import { DaywakaService } from './services/daywaka.service';
import { DwViewerService } from './services/dw-viewer.service';
import { DwJobViewerService } from './services/dw-job-viewer.service';
import { DwProfileService } from './services/dw-profile.service';


@NgModule({
  declarations: [DaywakaComponent],
  imports: [
    CommonModule,
    RouterModule,
    DaywakaRoutingModule,
    DaywakaThemeModule
  ],
  providers: [DaywakaService, DwViewerService,DwJobViewerService,DwProfileService]
})
export class DaywakaModule { }
