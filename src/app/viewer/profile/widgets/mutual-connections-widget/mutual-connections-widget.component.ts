import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-mutual-connections-widget',
  templateUrl: './mutual-connections-widget.component.html',
  styleUrls: ['./mutual-connections-widget.component.scss']
})
export class MutualConnectionsWidgetComponent implements OnInit {

  urlviewerService:UrlViewerService;
  connectionsService:ConnectionsService;
  constructor(urlviewerService:UrlViewerService,connectionsService:ConnectionsService) { 
    this.urlviewerService=urlviewerService;
    this.connectionsService=connectionsService;
  }

  ngOnInit() {
  }

}
