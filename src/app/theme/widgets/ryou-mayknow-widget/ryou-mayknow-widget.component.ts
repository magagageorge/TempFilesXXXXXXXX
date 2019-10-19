import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '@app/services/connections.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-ryou-mayknow-widget',
  templateUrl: './ryou-mayknow-widget.component.html',
  styleUrls: ['./ryou-mayknow-widget.component.scss']
})
export class RyouMayknowWidgetComponent implements OnInit {

  connectionsService:ConnectionsService;
  hovercardService:HoverCardService;
  urlViewerService:UrlViewerService;
  constructor(connectionsService:ConnectionsService,urlViewerService:UrlViewerService,hovercardService:HoverCardService) { 
    this.connectionsService=connectionsService;
    this.hovercardService=hovercardService;
    this.urlViewerService=urlViewerService;
  }

  ngOnInit() {
  }

}
