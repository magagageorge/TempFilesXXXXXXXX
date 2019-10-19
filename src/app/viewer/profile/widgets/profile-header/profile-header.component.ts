import { Component, OnInit,Input } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() nav_tab:string;
  urlviewerService:UrlViewerService;
  connectionsService:ConnectionsService;
  constructor(urlviewerService:UrlViewerService,connectionsService:ConnectionsService) { 
    this.urlviewerService=urlviewerService;
    this.connectionsService=connectionsService;
  }

  ngOnInit() {
  }

}
