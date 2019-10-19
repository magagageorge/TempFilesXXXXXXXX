import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileConnectionsService } from '@app/services/profile-connections.service';

@Component({
  selector: 'app-profile-network-summary-widget',
  templateUrl: './profile-network-summary-widget.component.html',
  styleUrls: ['./profile-network-summary-widget.component.scss']
})
export class ProfileNetworkSummaryWidgetComponent implements OnInit {

  urlViewerService:UrlViewerService;
  profileConnectionsService:ProfileConnectionsService;
  constructor(urlViewerService:UrlViewerService,profileConnectionsService:ProfileConnectionsService) { 
    this.urlViewerService=urlViewerService;
    this.profileConnectionsService=profileConnectionsService;
  }

  ngOnInit() {
  }

}
