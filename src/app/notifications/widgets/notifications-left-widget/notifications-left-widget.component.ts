import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-notifications-left-widget',
  templateUrl: './notifications-left-widget.component.html',
  styleUrls: ['./notifications-left-widget.component.scss']
})
export class NotificationsLeftWidgetComponent implements OnInit {

  profileService:ProfileService;
  constructor(profileService:ProfileService) { 
    this.profileService=profileService;
  }

  ngOnInit() {
  }

}
