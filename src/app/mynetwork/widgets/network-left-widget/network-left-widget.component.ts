import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-network-left-widget',
  templateUrl: './network-left-widget.component.html',
  styleUrls: ['./network-left-widget.component.scss']
})
export class NetworkLeftWidgetComponent implements OnInit {

  profileService:ProfileService
  constructor(profileService:ProfileService) {
    this.profileService=profileService;
   }

  ngOnInit() {
  }

}
