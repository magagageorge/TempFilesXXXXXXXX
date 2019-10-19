import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule,routedComponents } from './invitations-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ThemeModule } from '@app/theme/theme.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { InviteNavWidgetComponent } from './widgets/invite-nav-widget/invite-nav-widget.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    WidgetsModule,
    InfiniteScrollModule,
    InvitationsRoutingModule
  ],
  declarations: [...routedComponents, InviteNavWidgetComponent]
})
export class InvitationsModule { }
