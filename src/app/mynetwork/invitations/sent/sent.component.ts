import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  title:string="Sent Invitations";
  parent_route:string="mynetwork";
  connectionsService:ConnectionsService;
  tab:string="sent";
  constructor(connectionsService:ConnectionsService) {
    this.connectionsService=connectionsService;
   }

  ngOnInit() {
    this.connectionsService.loadSentRequests();
  }

}
