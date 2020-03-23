import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedService } from '@app/services/feed.service';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-post-delete-modal',
  templateUrl: './post-delete-modal.component.html',
  styleUrls: ['./post-delete-modal.component.scss']
})
export class PostDeleteModalComponent implements OnInit {

  @Input() feedId:number;
  modal: NgbActiveModal;
  appModalService:AppModalService;
  constructor(modal: NgbActiveModal,appModalService:AppModalService) {
    this.appModalService=appModalService;
    this.modal=modal;
  }
  public setFeedId(id:number){
    this.feedId=id;
  } 
  ngOnInit() {
  }



}
