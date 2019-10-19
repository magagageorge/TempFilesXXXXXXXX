import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-profile-title-widget',
  templateUrl: './profile-title-widget.component.html',
  styleUrls: ['./profile-title-widget.component.scss']
})
export class ProfileTitleWidgetComponent implements OnInit {

  urlviewerService:UrlViewerService;
  connectionsService:ConnectionsService;
  constructor(urlviewerService:UrlViewerService,connectionsService:ConnectionsService) { 
    this.urlviewerService=urlviewerService;
    this.connectionsService=connectionsService;
  }

  ngOnInit() {
  }

}
