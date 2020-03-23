import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessengerModalsService } from '@app/messages/services/messenger-modals.service';

@Component({
  selector: 'app-confirm-delete-content-modal',
  templateUrl: './confirm-delete-content-modal.component.html',
  styleUrls: ['./confirm-delete-content-modal.component.scss']
})
export class ConfirmDeleteContentModalComponent implements OnInit {

  submitted: boolean = false;
  messages: string[];
  errors: string[];
  ThreadId: number;
  constructor(public modal: NgbActiveModal, public messengerModalService: MessengerModalsService) { }
  ngOnInit() {
  }

  deleteConversation() {
    var __this = this;
    this.messengerModalService.messengerService.service.getProvider(this.messengerModalService.messengerService.provider).crudconfig.route_url = 'ms/c-rooms/';
    if (this.submitted === false) {
      this.submitted = true;
      this.messengerModalService.messengerService.service.delete(this.messengerModalService.messengerService.provider, { id: this.ThreadId }).subscribe(function (result) {
        __this.submitted = false;
        if (result.isSuccess()) {
          __this.messages = result.getMessages();
          var data = result.getResultData();
          if (data == true) {
            __this.messengerModalService.messengerService.clearThreadMessages(__this.ThreadId);
          }
          __this.modal.dismiss('Cross click');
        } else {
          __this.errors = result.getErrors();
        }
      });
    }
  }

  setThreadId(id: number) {
    this.ThreadId = id;
  }

}
