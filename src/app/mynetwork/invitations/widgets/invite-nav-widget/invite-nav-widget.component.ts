import { Component, OnInit,Input } from '@angular/core';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-invite-nav-widget',
  templateUrl: './invite-nav-widget.component.html',
  styleUrls: ['./invite-nav-widget.component.scss']
})
export class InviteNavWidgetComponent implements OnInit {

  @Input() tab:string;
  connectionsService:ConnectionsService;
  constructor(connectionsService:ConnectionsService) { 
    this.connectionsService=connectionsService;
  }

  ngOnInit() {
  }

}
