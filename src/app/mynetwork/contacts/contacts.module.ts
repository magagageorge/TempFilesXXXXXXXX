import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule,routedComponents } from './contacts-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { InviteComponent } from './invite/invite.component';
import { ConnectComponent } from './connect/connect.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WfHoverCardModule } from '@app/libs/wf-hover-card/wf-hover-card.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    WfHoverCardModule.forRoot(),
  ],
  declarations: [...routedComponents]
})
export class ContactsModule { }
