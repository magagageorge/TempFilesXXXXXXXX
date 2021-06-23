import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { DaywakaThemeModule } from '../daywaka-theme/daywaka-theme.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    DaywakaThemeModule
  ]
})
export class WebAppModule { }
