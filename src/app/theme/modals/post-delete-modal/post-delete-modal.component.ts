import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-post-delete-modal',
  templateUrl: './post-delete-modal.component.html',
  styleUrls: ['./post-delete-modal.component.scss']
})
export class PostDeleteModalComponent implements OnInit {

  @Input() feedId:number;
  constructor(public modal: NgbActiveModal,public feedService:FeedService) {}

  ngOnInit() {
  }

}
