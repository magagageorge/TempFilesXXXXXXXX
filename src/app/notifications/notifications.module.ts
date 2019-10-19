import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule,routedComponents } from './notifications-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { WidgetsModule } from './widgets/widgets.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    WidgetsModule,
    InfiniteScrollModule,
    NotificationsRoutingModule
  ],
  declarations: [...routedComponents]
})
export class NotificationsModule { }
