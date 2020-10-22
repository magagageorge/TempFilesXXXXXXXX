import { Component, OnInit } from '@angular/core';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-delete-comment-modal',
  templateUrl: './delete-comment-modal.component.html',
  styleUrls: ['./delete-comment-modal.component.scss']
})
export class DeleteCommentModalComponent implements OnInit {

  constructor(public appModalService: AppModalService) { }

  ngOnInit() {
  }

  deleteComment() {
    if (this.appModalService.deleteCommentModal.comment != null) {
      if (this.appModalService.deleteCommentModal.reply != null) {
        this.appModalService.commentsService.deleteCommentReply(this.appModalService.deleteCommentModal.comment, this.appModalService.deleteCommentModal.reply);
      } else {
        this.appModalService.commentsService.deleteComment(this.appModalService.deleteCommentModal.comment);
      }
      this.appModalService.showDeleteComment(false, null, null);
    }
  }
}
