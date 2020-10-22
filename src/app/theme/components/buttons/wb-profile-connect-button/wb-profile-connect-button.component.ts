import { Component, Input, OnInit } from '@angular/core';
import { ConnectionStatus } from '@app/models/global';
import { AppModalService } from '@app/services/app-modal.service';
import { ConnectionsService } from '@app/services/connections.service';

@Component({
  selector: 'app-wb-profile-connect-button',
  templateUrl: './wb-profile-connect-button.component.html',
  styleUrls: ['./wb-profile-connect-button.component.scss']
})
export class WbProfileConnectButtonComponent implements OnInit {

  @Input() profile_id: number;
  @Input() connectStatus: ConnectionStatus;
  @Input() show_cancel: boolean = true;
  @Input() show_ignore: boolean = true;
  @Input() show_connected: boolean = true;
  constructor(public connectionService: ConnectionsService, public appModalService: AppModalService) { }

  ngOnInit() {
  }

  connecting(action: string) {
    if (action == 'connect') {
      this.connectionService.Connect(this.profile_id);
    } else if (action == 'accept') {
      this.connectionService.Accept(this.profile_id);
    } else if (action == 'ignore') {
      this.connectionService.Ignore(this.profile_id);
    } else if (action == 'remove') {
      this.appModalService.showRemoveConnection(true, this.profile_id);
    } else if (action == 'cancel') {
      this.connectionService.Cancel(this.profile_id);
    } else { }
  }

}
