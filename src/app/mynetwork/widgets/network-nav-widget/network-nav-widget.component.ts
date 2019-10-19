import { Component, OnInit,Input } from '@angular/core';
import { NgbTab } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-network-nav-widget',
  templateUrl: './network-nav-widget.component.html',
  styleUrls: ['./network-nav-widget.component.scss']
})
export class NetworkNavWidgetComponent implements OnInit {

  profileService:ProfileService;
  constructor(profileService:ProfileService) {
    this.profileService=profileService;
   }

  ngOnInit() {
  }

}
