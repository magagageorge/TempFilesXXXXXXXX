import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  title:string="Received Invitations";
  parent_route:string="mynetwork";
  tab:string="received";
  connectionsService:ConnectionsService;
  constructor(connectionsService:ConnectionsService) {
    this.connectionsService=connectionsService;
   }

  ngOnInit() {
  }

}
