import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-profile-views-widget',
  templateUrl: './profile-views-widget.component.html',
  styleUrls: ['./profile-views-widget.component.scss']
})
export class ProfileViewsWidgetComponent implements OnInit {

  urlViewerService:UrlViewerService;
  hovercardService:HoverCardService;
  connectionsService:ConnectionsService;
  constructor(urlViewerService:UrlViewerService,hovercardService:HoverCardService,connectionsService:ConnectionsService) {
    this.urlViewerService=urlViewerService;
    this.hovercardService=hovercardService;
    this.connectionsService=connectionsService;
   }

  ngOnInit() {
  }

}
