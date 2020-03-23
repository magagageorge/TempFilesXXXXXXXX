import { Injectable } from '@angular/core';
import { FeedService } from './feed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from './comments.service';

@Injectable({
  providedIn: 'root'
})
export class AppModalService {

  feedService: FeedService;
  commentsService: CommentsService;
  modalRef: any;
  _modalService: NgbModal;
  constructor(feedService: FeedService, commentsService: CommentsService, _modalService: NgbModal) {
    this.feedService = feedService;
    this.commentsService = commentsService;
    this._modalService = _modalService;
  }
}
