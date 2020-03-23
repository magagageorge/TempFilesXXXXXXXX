import { Component, OnInit, Input } from '@angular/core';
import { ChatRoom } from '@app/messages/models/chat-room';
import { MessengerModalsService } from '@app/messages/services/messenger-modals.service';
import { ReportMessengerContentModalComponent } from '@app/messages/modals/report-messenger-content-modal/report-messenger-content-modal.component';
import { ConfirmDeleteContentModalComponent } from '@app/messages/modals/confirm-delete-content-modal/confirm-delete-content-modal.component';

@Component({
  selector: 'app-chat-thread-mobile-head-widget',
  templateUrl: './chat-thread-mobile-head-widget.component.html',
  styleUrls: ['./chat-thread-mobile-head-widget.component.scss']
})
export class ChatThreadMobileHeadWidgetComponent implements OnInit {

  @Input() chatroom:ChatRoom;
  messengerModalService:MessengerModalsService;
  constructor(messengerModalService:MessengerModalsService) { 
    this.messengerModalService=messengerModalService;
  }

  ngOnInit() {
  }

  reportMessengerContent(chatroomId: number) {
    this.messengerModalService.modalRef = this.messengerModalService._modalService.open(ReportMessengerContentModalComponent, { centered: true });
    this.messengerModalService.modalRef.componentInstance.setModel(chatroomId, 'Thread');
  }

  confirmDeleteConversation(chatroomId: number) {
    this.messengerModalService.modalRef = this.messengerModalService._modalService.open(ConfirmDeleteContentModalComponent, { centered: true });
    this.messengerModalService.modalRef.componentInstance.setThreadId(chatroomId);
  }


}
