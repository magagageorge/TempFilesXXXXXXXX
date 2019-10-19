import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '@app/services/connections.service';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  title:string="Connections";
  parent_route:string="mynetwork";
  connectionsService:ConnectionsService;
  profileService:ProfileService;
  constructor(connectionsService:ConnectionsService,profileService:ProfileService) {
    this.connectionsService=connectionsService;
    this.profileService=profileService;
   }

  ngOnInit() {
    this.connectionsService.loadConnections({page:this.connectionsService.next_connections_page});
  }

}
