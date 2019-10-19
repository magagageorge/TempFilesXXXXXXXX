import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MynetworkRoutingModule,routedComponents } from './mynetwork-routing.module';
import { WidgetsModule } from './widgets/widgets.module';
import { WfHoverCardModule } from '@app/libs/wf-hover-card/wf-hover-card.module';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    WidgetsModule,
    InfiniteScrollModule,
    MynetworkRoutingModule,
    WfHoverCardModule.forRoot(),
  ],
  declarations: [...routedComponents],
})
export class MynetworkModule { }


