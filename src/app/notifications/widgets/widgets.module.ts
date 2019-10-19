import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsLeftWidgetComponent } from './notifications-left-widget/notifications-left-widget.component';
import { NotificationWidgetComponent } from './notification-widget/notification-widget.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [NotificationsLeftWidgetComponent, NotificationWidgetComponent],
  exports:[NotificationsLeftWidgetComponent, NotificationWidgetComponent]
})
export class WidgetsModule { }
