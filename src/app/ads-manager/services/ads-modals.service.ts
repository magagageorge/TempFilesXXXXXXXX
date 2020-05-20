import { Injectable } from '@angular/core';
import { AdsService } from './ads.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AdsModalsService {

  modalRef: any;
  _modalService: NgbModal;
  constructor(public adsService:AdsService, _modalService: NgbModal) { 
    this._modalService=_modalService;
  }

}
