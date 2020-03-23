import { Injectable } from '@angular/core';
import { MessengerService } from './messenger.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class MessengerModalsService {

  messengerService:MessengerService;
  modalRef: any;
  _modalService: NgbModal;
  constructor(messengerService:MessengerService, _modalService: NgbModal) { 
    this.messengerService=messengerService;
    this._modalService=_modalService;
  }


}
