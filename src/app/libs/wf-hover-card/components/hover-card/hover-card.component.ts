import { Component, OnInit } from '@angular/core';
import { HoverCardService } from '../../services/hover-card.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-hover-card',
  templateUrl: './hover-card.component.html',
  styleUrls: ['./hover-card.component.scss']
})
export class HoverCardComponent implements OnInit {

  hovercardService:HoverCardService;
  connectionsService:ConnectionsService;
  constructor(hovercardService:HoverCardService,connectionsService:ConnectionsService) {
    this.hovercardService=hovercardService;
    this.connectionsService=connectionsService;
   }

  ngOnInit() {
  }

}
