import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '@app/models/profile/profile';
import { ConnectionsService } from '@app/services/connections.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Profile;
  constructor(public connectionsService:ConnectionsService,public urlViewerService:UrlViewerService) { }

  ngOnInit() {
  }

}
