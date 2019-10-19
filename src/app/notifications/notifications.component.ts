import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '@app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationsService:NotificationsService;
  constructor(notificationsService:NotificationsService) {
    this.notificationsService=notificationsService;
   }

  ngOnInit() {
  }

}
