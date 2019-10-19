import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-mynetwork',
  templateUrl: './mynetwork.component.html',
  styleUrls: ['./mynetwork.component.scss']
})
export class MynetworkComponent implements OnInit {

  connectionsService:ConnectionsService;
  constructor(connectionsService:ConnectionsService) {
    this.connectionsService=connectionsService;
   }

  ngOnInit() {
  }

}
