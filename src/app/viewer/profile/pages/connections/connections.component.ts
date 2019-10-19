import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileConnectionsService } from '@app/services/profile-connections.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  menu_tab_name:string='connections';
  urlviewerService:UrlViewerService;
  profileConnectionsService:ProfileConnectionsService;
  constructor(urlviewerService:UrlViewerService,profileConnectionsService:ProfileConnectionsService) { 
    this.urlviewerService=urlviewerService;
    this.profileConnectionsService=profileConnectionsService;
  }

  ngOnInit() {
  }

}
