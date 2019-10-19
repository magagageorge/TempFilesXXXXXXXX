import { Component, OnInit,Input } from '@angular/core';
import { Profile } from '@app/models/profile/profile';
import { ConnectionsService } from '@app/services/connections.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-card-widget',
  templateUrl: './profile-card-widget.component.html',
  styleUrls: ['./profile-card-widget.component.scss']
})
export class ProfileCardWidgetComponent implements OnInit {

  @Input() profile:Profile;
  connectionsService:ConnectionsService;
  urlViewerService:UrlViewerService;
  constructor(connectionsService:ConnectionsService,urlViewerService:UrlViewerService) {
    this.connectionsService=connectionsService;
    this.urlViewerService=urlViewerService;
   }

  ngOnInit() {
  }

}
