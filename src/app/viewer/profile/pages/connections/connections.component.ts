import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileConnectionsService } from '@app/services/profile-connections.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  menu_tab_name:string='connections';
  urlviewerService:UrlViewerService;
  profileConnectionsService:ProfileConnectionsService;
  constructor(urlviewerService:UrlViewerService,profileConnectionsService:ProfileConnectionsService,private title: Title, private meta: Meta) { 
    this.urlviewerService=urlviewerService;
    this.profileConnectionsService=profileConnectionsService;
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.profile.name + ' - Connections | Woorbi');
  }

}
