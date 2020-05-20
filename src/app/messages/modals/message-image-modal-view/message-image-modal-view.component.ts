import { Component, OnInit } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';

@Component({
  selector: 'app-message-image-modal-view',
  templateUrl: './message-image-modal-view.component.html',
  styleUrls: ['./message-image-modal-view.component.scss']
})
export class MessageImageModalViewComponent implements OnInit {

  constructor(public messengerService:MessengerService) { }

  ngOnInit() {
  }

}
