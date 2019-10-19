import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-profile-action-buttons-widget',
  templateUrl: './profile-action-buttons-widget.component.html',
  styleUrls: ['./profile-action-buttons-widget.component.scss']
})
export class ProfileActionButtonsWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  connectionsService:ConnectionsService;
  constructor(urlviwerService:UrlViewerService,connectionsService:ConnectionsService) { 
    this.urlviwerService=urlviwerService;
    this.connectionsService=connectionsService;
  }

  ngOnInit() {
  }

}
