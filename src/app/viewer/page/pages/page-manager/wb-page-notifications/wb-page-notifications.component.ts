import { Component, OnInit } from '@angular/core';
import { PageNotificationService } from '@app/viewer/page/services/page-notification.service';

@Component({
  selector: 'app-wb-page-notifications',
  templateUrl: './wb-page-notifications.component.html',
  styleUrls: ['./wb-page-notifications.component.scss']
})
export class WbPageNotificationsComponent implements OnInit {

  constructor(public notificationsService: PageNotificationService) { }

  ngOnInit() {
    if (this.notificationsService.NOTIFICATIONS.length == 0) {
      this.notificationsService.initialLoad();
    }
  }

}
