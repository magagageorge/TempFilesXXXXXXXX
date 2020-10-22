import { Component, OnInit } from '@angular/core';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-delete-connection-modal',
  templateUrl: './delete-connection-modal.component.html',
  styleUrls: ['./delete-connection-modal.component.scss']
})
export class DeleteConnectionModalComponent implements OnInit {

  constructor(public appModalService: AppModalService) { }

  ngOnInit() {
  }

  deleteConnection() {
    if (this.appModalService.removeConnectionModel.profile_id != null) {
      this.appModalService.connectionServices.Disconnect(this.appModalService.removeConnectionModel.profile_id);
      this.appModalService.showRemoveConnection(false, null);
    }
  }
}
