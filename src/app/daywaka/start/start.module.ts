import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, StartRoutingModule } from './start-routing.module';
import { DaywakaThemeModule } from '../daywaka-theme/daywaka-theme.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    StartRoutingModule,
    DaywakaThemeModule
  ]
})
export class StartModule { }
